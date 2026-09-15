/* Display the user supplied by Telegram; this is not backend authentication. */
(function(){
 const row=document.getElementById('tgAccount'),label=document.getElementById('tgIdentity');
 const user=window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initDataUnsafe&&window.Telegram.WebApp.initDataUnsafe.user;
 const connected=!!(user&&user.id);
 let name='Niet verbonden';
 if(connected){
   name=user.username?'@'+user.username:([user.first_name,user.last_name].filter(Boolean).join(' ')||'Telegram-speler');
   row.classList.add('connected');
   const player=document.getElementById('playerName');if(player)player.textContent=name;
 }
 label.textContent=connected?'Telegram · '+name:'Telegram · Niet verbonden';
 row.title=connected?(user.username?'Geopend als '+name:'Verbonden via Telegram; dit account heeft geen username.'):'Open de game via de Telegram Mini App om je account te zien.';
})();
