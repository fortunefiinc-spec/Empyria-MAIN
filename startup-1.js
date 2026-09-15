
(function(){var u=['https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js','https://unpkg.com/three@0.128.0/build/three.min.js','https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js'];
function n(){if(window.THREE)return;if(!u.length)return;
var s=document.createElement('script');s.src=u.shift();s.onerror=n;document.head.appendChild(s);}
if(!window.THREE)n();
window.addEventListener('load',function(){if(!window.THREE)n();});})();
(function(){
  var tg = window.Telegram && window.Telegram.WebApp;
  if(!tg) return;
  function insets(){
    var top=0,bot=0;
    try{ var c=tg.contentSafeAreaInset, s=tg.safeAreaInset;
      top=Math.max((c&&c.top)||0,(s&&s.top)||0);
      bot=Math.max((c&&c.bottom)||0,(s&&s.bottom)||0);
    }catch(e){}
    top=Math.max(0,top);
    document.documentElement.style.setProperty('--tgtop',top+'px');
    document.documentElement.style.setProperty('--tgbot',bot+'px');
  }
  try{
    tg.ready(); tg.expand();
    if(tg.disableVerticalSwipes) tg.disableVerticalSwipes();
    if(tg.setHeaderColor) tg.setHeaderColor('#0b1726');
    if(tg.setBackgroundColor) tg.setBackgroundColor('#0b1726');
    window.TG_USER = tg.initDataUnsafe && tg.initDataUnsafe.user || null;
    insets();
    tg.onEvent && tg.onEvent('viewportChanged',insets);
    tg.onEvent && tg.onEvent('safeAreaChanged',insets);
    tg.onEvent && tg.onEvent('contentSafeAreaChanged',insets);
    setTimeout(insets,400); setTimeout(insets,1500);
  }catch(e){}
})();

