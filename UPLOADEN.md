# Empyria v0.28 terugzetten

Deze versie is één bestand met alles erin. Geen assets-map, geen
submappen. Dat is precies waarom hij het doet.

## Uploaden

Zet deze vier bestanden in de ROOT van fortunefiinc-spec/Empyria-MAIN,
naast elkaar, en overschrijf wat er staat:

    index.html
    three.min.js
    empyria-music.mp3
    empyria-music2.mp3

Heb je eerder een assets/-map aangemaakt: die mag blijven staan, hij
wordt niet meer gebruikt. Verwijderen mag ook.

## Daarna

BotFather openen en het versienummer achter je Mini App URL ophogen,
anders zien je leden de kapotte versie uit hun cache:

    https://fortunefiinc-spec.github.io/Empyria-MAIN/index.html?v=17

## Controleren

Onder het tandwiel hoort te staan: v0.28 · rotate & conversations

Gaat er iets mis, dan krijg je nu een rode lijst met de ontbrekende
bestanden in beeld, in plaats van een leeg scherm.

## Over v0.31

Die versie verwacht een assets/-map met game.js, industrial-pack.js,
startup-1.js, telegram-account.js, three.min.js en de css. Heb je die
bestanden compleet, dan kun je alsnog overstappen. Zonder game.js werkt
v0.31 niet, want daar zit de hele game-code in.
