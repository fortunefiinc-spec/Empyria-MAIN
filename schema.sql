-- ═══════════════════════════════════════════════════════
-- EMPYRIA — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════════════

-- 1. PLAYERS TABLE
create table if not exists players (
  id              uuid default gen_random_uuid() primary key,
  telegram_id     bigint unique not null,
  username        text,
  first_name      text,
  wallet_address  text,
  emp_balance     integer default 0,
  prestige_level  integer default 0,
  era             integer default 1,
  play_streak     integer default 0,
  last_login      date,
  game_state      jsonb,   -- full save (G + E objects)
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- 2. SCORES TABLE (mini-game highscores)
create table if not exists scores (
  id          uuid default gen_random_uuid() primary key,
  telegram_id bigint not null references players(telegram_id) on delete cascade,
  game        text not null,  -- 'tap','aim','mem','block','react'
  score       integer not null,
  emp_earned  integer default 0,
  played_at   timestamptz default now()
);

-- 3. INDEX for fast leaderboard queries
create index if not exists idx_players_emp     on players(emp_balance desc);
create index if not exists idx_players_prestige on players(prestige_level desc);
create index if not exists idx_scores_game     on scores(game, score desc);

-- 4. AUTO-UPDATE updated_at
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

create trigger players_updated_at
  before update on players
  for each row execute procedure update_updated_at();

-- 5. LEADERBOARD VIEW
create or replace view leaderboard as
  select
    row_number() over (order by emp_balance desc) as rank,
    telegram_id,
    coalesce(username, first_name, 'Player') as display_name,
    emp_balance,
    prestige_level,
    era,
    play_streak
  from players
  order by emp_balance desc
  limit 100;

-- 6. ROW LEVEL SECURITY
alter table players enable row level security;
alter table scores  enable row level security;

-- Anyone can read players (for leaderboard)
create policy "players_public_read"
  on players for select using (true);

-- Players can only insert/update their own row (matched by telegram_id)
create policy "players_own_insert"
  on players for insert
  with check (true);  -- insert allowed for all (first time signup)

create policy "players_own_update"
  on players for update
  using (telegram_id = (current_setting('app.telegram_id', true))::bigint);

-- Scores: read all, insert own
create policy "scores_public_read"
  on scores for select using (true);

create policy "scores_own_insert"
  on scores for insert
  with check (true);

-- 7. GRANT access to anon role
grant select, insert, update on players  to anon;
grant select, insert          on scores   to anon;
grant select                  on leaderboard to anon;
