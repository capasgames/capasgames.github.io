'use strict';
const copy={
  tr:{skip:'İçeriğe geç',navigation:'Ana menü',menu:'Menüyü aç',navGames:'Oyunlarımız',navStudio:'Stüdyo',navPlay:'Bir devreyi çöz',heroEyebrow:'BAĞIMSIZ FİKİRLER. KEYİFLİ OYUNLAR.',heroLine1:'Bir dokunuş.',heroLine2:'Yeni bir dünya.',heroDescription:'Merakla başlayan, bir bölüm daha dedirten oyunlar. Cebine sığan küçük dünyalar tasarlıyoruz.',explore:'Oyunları keşfet',heroNote:'Küçük bir stüdyo. Büyük bir oyun tutkusu.',artLabel:'BİR FİKRE GÜÇ VER.',artCaption:'BAĞLANTI KUR.',scroll:'KEŞFETMEYE DEVAM ET',made:"Türkiye’den, oyun sevgisiyle.",ticker1:'MERAK ET',ticker2:'BAĞLANTI KUR',ticker3:'BİR DAHA DENE',ticker4:'OYUNUN KEYFİNİ ÇIKAR',gameEyebrow:'01 — OYUNLARIMIZ',gameAside:'Bir fikirden bir oyuna.',puzzle:'DEVRE BULMACASI',gameIntro:'Her bağlantıda bir “işte bu!”',gameDescription:'Kabloları döndür, elektriğe yol aç ve devreyi tamamla. Basit bir dokunuşla başlayan bulmacalar, her yeni bağlantıda seni biraz daha düşündürsün.',offline:'Çevrim dışı oynanış',touch:'Dokun, döndür, çöz',languages:'Türkçe & English',findPlay:"Google Play’den indir",tryDemo:'Önce bir devreyi çöz',demoTitle:'Işığı sen yak.',demoDescription:'Kablolara dokun. Pil ile lambayı birleştir.',puzzleLabel:'Devre bulmacası: kabloları döndür',reset:'Devreyi yeniden başlat',demoNote:'OYUN MEKANİĞİNİN WEB DEMOSU',studioEyebrow:'02 — CAPASGAMES HAKKINDA',studioAside:'Merak, tasarım, oyun.',studioLine1:'Oyuna biraz',studioLine2:'merak katıyoruz.',studioDescription:'capasGames olarak gündelik anlara keyifli molalar ekleyen mobil oyunlar üretiyoruz. Sevdiğimiz şey, basit bir fikrin oyuncunun elinde güzel bir keşfe dönüşmesi.',principle1Title:'Kolay başla.',principle1Description:'Karmaşık kurallar yerine, ilk dokunuşta anlaşılabilen bir oyun fikri.',principle2Title:'Kendi yolunu bul.',principle2Description:'Denemeye, düşünmeye ve o küçük keşif anına alan açan bulmacalar.',principle3Title:'Keyfine bak.',principle3Description:'Kısa bir molada ya da uzun bir yolculukta, oyun her zaman cebinde.',faqEyebrow:'03 — AKLINDAKİLER',faqTitle:'Bir iki küçük\nayrıntı.',faq1Question:'Circuit Master nasıl oynanır?',faq1Answer:'Kablo parçalarına dokunarak onları döndür. Pil ile hedef arasında kesintisiz bir bağlantı kur ve elektriğin doğru yere ulaşmasını sağla. Yukarıdaki küçük demo ile hemen deneyebilirsin.',faq2Question:'İnternet olmadan oynayabilir miyim?',faq2Answer:"Evet, Circuit Master’ın bulmacalarını çevrim dışı oynayabilirsin. Reklamlar ve reklam izleyerek kazanılan ödüller internet bağlantısı gerektirir.",faq3Question:'Hangi diller destekleniyor?',faq3Answer:'Circuit Master Türkçe ve İngilizce dil desteği sunuyor. Bu siteyi de sağ üst köşedeki TR / EN düğmesiyle iki dilde gezebilirsin.',closingEyebrow:'SIRADAKİ BAĞLANTI SENİN.',closingLine1:'Bir bölüm',closingLine2:'daha?',closingCta:'Devreyi tamamla',backTop:'Başa dön',rights:'Tüm hakları saklıdır.',footerNote:'Merakla tasarlandı. Keyifle oynansın.',waiting:'Bağlantı seni bekliyor.',progress:'Gücü lambaya ulaştır.',solved:'Harika! Lambayı yaktın.',moves:'HAMLE',battery:'Pil: güç kaynağı',lamp:'Lamba: hedef',wire:'Kablo',rotate:'Döndür',directions:['yukarı','sağ','aşağı','sol']},
  en:{skip:'Skip to content',navigation:'Main navigation',menu:'Open menu',navGames:'Our games',navStudio:'The studio',navPlay:'Try a circuit',heroEyebrow:'INDEPENDENT IDEAS. JOYFUL GAMES.',heroLine1:'One little tap.',heroLine2:'A whole new world.',heroDescription:'Games that spark curiosity and make you want one more level. We create little worlds that fit in your pocket.',explore:'Explore our games',heroNote:'A small studio. A big love for games.',artLabel:'POWER UP AN IDEA.',artCaption:'MAKE A CONNECTION.',scroll:'KEEP EXPLORING',made:'Made with a love for games, in Türkiye.',ticker1:'STAY CURIOUS',ticker2:'CONNECT THE DOTS',ticker3:'TRY AGAIN',ticker4:'ENJOY THE GAME',gameEyebrow:'01 — OUR GAMES',gameAside:'From a little idea to a game.',puzzle:'CIRCUIT PUZZLE',gameIntro:'A little “aha!” in every connection.',gameDescription:'Rotate the wires, make a path for the power, and complete the circuit. A simple tap starts a puzzle that gives you something new to think about with every connection.',offline:'Play offline',touch:'Tap, rotate, solve',languages:'Türkçe & English',findPlay:'Get it on Google Play',tryDemo:'Try a circuit first',demoTitle:'Light it up.',demoDescription:'Tap the wires. Connect the battery to the bulb.',puzzleLabel:'Circuit puzzle: rotate the wires',reset:'Restart the circuit',demoNote:'WEB DEMO OF THE GAME MECHANIC',studioEyebrow:'02 — ABOUT CAPASGAMES',studioAside:'Curiosity, design, play.',studioLine1:'A little more',studioLine2:'room for curiosity.',studioDescription:'At capasGames, we make mobile games that bring a playful break to everyday moments. We love seeing a simple idea turn into a delightful discovery in a player’s hands.',principle1Title:'Start simply.',principle1Description:'A game idea you can understand with the first tap, without complicated rules.',principle2Title:'Find your way.',principle2Description:'Puzzles that leave room for experimenting, thinking, and a little discovery.',principle3Title:'Enjoy the moment.',principle3Description:'On a short break or a long journey, a little game is always in your pocket.',faqEyebrow:'03 — GOOD TO KNOW',faqTitle:'A few little\ndetails.',faq1Question:'How do I play Circuit Master?',faq1Answer:'Tap the wire pieces to rotate them. Make a continuous connection from the battery to the target and get the power where it needs to go. Try the little demo above to get a feel for it.',faq2Question:'Can I play without the internet?',faq2Answer:'Yes, you can play Circuit Master’s puzzles offline. Ads and rewards earned by watching ads require an internet connection.',faq3Question:'Which languages are supported?',faq3Answer:'Circuit Master supports Turkish and English. You can also explore this site in both languages using the TR / EN button in the top right.',closingEyebrow:'THE NEXT CONNECTION IS YOURS.',closingLine1:'One more',closingLine2:'level?',closingCta:'Complete the circuit',backTop:'Back to top',rights:'All rights reserved.',footerNote:'Made with curiosity. Played with joy.',waiting:'A connection is waiting for you.',progress:'Get the power to the bulb.',solved:'Nice! You lit up the bulb.',moves:'MOVES',battery:'Battery: power source',lamp:'Bulb: target',wire:'Wire',rotate:'Rotate',directions:['up','right','down','left']}
};
let language='tr';
try{if(localStorage.getItem('capas-language')==='en')language='en';}catch{}
let rotations=[...CapasCircuit.initialRotations];let moves=0;
const grid=document.getElementById('puzzle-grid');
const cells=[];
const wireSvg='<svg viewBox="0 0 100 100" aria-hidden="true"><g class="wire-rotation"><path class="wire-track" d="PATH"/><path class="wire-line" d="PATH"/><circle cx="50" cy="50" r="4" fill="#163754" opacity=".35"/></g></svg>';
CapasCircuit.baseMasks.forEach((mask,index)=>{
  const endpoint=index===0||index===8;
  const cell=document.createElement(endpoint?'div':'button');
  cell.className='puzzle-cell'+(endpoint?' endpoint':'')+(index===8?' lamp':'');
  if(endpoint){cell.setAttribute('role','img');}else{cell.type='button';cell.addEventListener('click',()=>{rotations[index]=(rotations[index]+1)%4;moves++;updatePuzzle();});}
  if(index===0)cell.innerHTML='<svg viewBox="0 0 100 100" aria-hidden="true"><path class="wire-track" d="M62 50H100"/><path class="wire-line" d="M62 50H100"/><rect x="24" y="24" width="40" height="52" rx="8" fill="#36bfff" stroke="#b5efff" stroke-width="2"/><rect x="36" y="18" width="16" height="7" rx="2" fill="#b5efff"/><path d="M38 41h12m-6-6v12M39 61h10" stroke="#073561" stroke-width="3" stroke-linecap="round"/></svg>';
  else if(index===8)cell.innerHTML='<svg viewBox="0 0 100 100" aria-hidden="true"><path class="wire-track" d="M50 0V30"/><path class="wire-line" d="M50 0V30"/><path d="M50 27a19 19 0 0 0-12 34v9h24v-9A19 19 0 0 0 50 27Z" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="3"/><path d="m43 44 7 8 7-8M50 52v16M40 77h20m-16 6h12" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/></svg>';
  else{const path=mask===5?'M50 0V100':'M50 0V50H100';cell.innerHTML=wireSvg.replaceAll('PATH',path);}
  cells.push(cell);grid.appendChild(cell);
});
function updatePuzzle(){
  const text=copy[language];const powered=CapasCircuit.poweredTiles(rotations);const solved=powered.has(8);
  cells.forEach((cell,index)=>{
    cell.classList.toggle('powered',powered.has(index));
    const group=cell.querySelector('.wire-rotation');if(group)group.setAttribute('transform',`rotate(${rotations[index]*90} 50 50)`);
    if(index===0||index===8)cell.setAttribute('aria-label',index===0?text.battery:text.lamp);
    else{const mask=CapasCircuit.rotateMask(CapasCircuit.baseMasks[index],rotations[index]);const directions=text.directions.filter((_,i)=>mask&(1<<i)).join(', ');cell.setAttribute('aria-label',`${text.wire} ${index+1}: ${directions}. ${text.rotate}.`);}
  });
  document.getElementById('puzzle-status').textContent=solved?text.solved:moves?text.progress:text.waiting;
  document.getElementById('move-count').textContent=`${moves} ${text.moves}`;
  document.getElementById('demo').classList.toggle('solved',solved);
}
document.getElementById('reset-puzzle').addEventListener('click',()=>{
  do{rotations=CapasCircuit.baseMasks.map((_,i)=>i===0||i===8?0:Math.floor(Math.random()*4));}while(CapasCircuit.poweredTiles(rotations).has(8));
  moves=0;updatePuzzle();
});
function applyLanguage(){
  document.documentElement.lang=language;
  document.querySelectorAll('[data-i18n]').forEach(node=>{const value=copy[language][node.dataset.i18n];if(value!==undefined)node.textContent=value;});
  document.querySelectorAll('[data-i18n-aria]').forEach(node=>{node.setAttribute('aria-label',copy[language][node.dataset.i18nAria]);});
  const toggle=document.getElementById('language-toggle');toggle.innerHTML=language==='tr'?'TR <span aria-hidden="true">/</span> <span class="muted">EN</span>':'<span class="muted">TR</span> <span aria-hidden="true">/</span> EN';
  toggle.setAttribute('aria-label',language==='tr'?'Switch to English':'Türkçeye geç');
  document.title=language==='tr'?'capasGames — Bir dokunuş. Yeni bir dünya.':'capasGames — One little tap. A whole new world.';
  document.querySelector('meta[name="description"]').content=language==='tr'?"capasGames: Küçük fikirlerden keyifli mobil oyunlara. Circuit Master’ı keşfet, kabloları döndür ve devreyi tamamla.":'capasGames: Independent ideas, joyful mobile games. Discover Circuit Master, rotate the wires, and complete the circuit.';
  updatePuzzle();
}
document.getElementById('language-toggle').addEventListener('click',()=>{language=language==='tr'?'en':'tr';try{localStorage.setItem('capas-language',language);}catch{}applyLanguage();});
document.getElementById('year').textContent=new Date().getFullYear();
applyLanguage();
document.querySelectorAll('#site-navigation a').forEach(link=>link.addEventListener('click',()=>{const nav=document.getElementById('site-navigation');if(window.bootstrap&&nav.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(nav,{toggle:false}).hide();}));
const motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
let frame=0;
function parallax(){
  frame=0;const enabled=!motionQuery.matches&&innerWidth>767;
  document.querySelectorAll('[data-parallax]').forEach(el=>{
    if(!enabled){el.style.transform='';return;}
    const section=el.closest('section');const rect=section.getBoundingClientRect();
    if(rect.bottom<0||rect.top>innerHeight)return;
    const amount=Math.max(-80,Math.min(80,-rect.top*Number(el.dataset.parallax)));
    el.style.transform=`translate3d(0,${amount.toFixed(1)}px,0)`;
  });
}
function scheduleParallax(){if(!frame)frame=requestAnimationFrame(parallax);}
addEventListener('scroll',scheduleParallax,{passive:true});addEventListener('resize',scheduleParallax);motionQuery.addEventListener('change',scheduleParallax);scheduleParallax();
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('#site-navigation .nav-link:not(.nav-cta)').forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}});},{rootMargin:'-20% 0px -55% 0px'});
  document.querySelectorAll('#oyunlar,#studyo').forEach(section=>observer.observe(section));
}
