/* Empyria Industrial Asset Pack. Original procedural artwork, no downloads. */
window.EmpyriaAssets=function({THREE,MAKERS,solarTex,metalTex,roofTex,padTex,solarMat,metalMat,roofMat}){
 const texture=(tex,draw)=>{const c=tex.image;c.width=512;c.height=512;draw(c.getContext('2d'),512);tex.needsUpdate=true;};
 const panel=(g,n,base)=>{g.fillStyle=base;g.fillRect(0,0,n,n);};
 texture(solarTex,(g,n)=>{
  panel(g,n,'#b7c8d5');g.fillStyle='#122333';g.fillRect(8,8,496,496);
  for(let y=0;y<6;y++)for(let x=0;x<6;x++){
   const px=14+x*81,py=14+y*81,gr=g.createLinearGradient(px,py,px+76,py+76);
   gr.addColorStop(0,'#286398');gr.addColorStop(.5,'#163953');gr.addColorStop(1,'#102e50');
   g.fillStyle=gr;g.beginPath();g.moveTo(px+7,py);g.lineTo(px+69,py);g.lineTo(px+76,py+7);g.lineTo(px+76,py+69);g.lineTo(px+69,py+76);g.lineTo(px+7,py+76);g.lineTo(px,py+69);g.lineTo(px,py+7);g.closePath();g.fill();
   g.fillStyle='rgba(160,210,236,.3)';for(let k=1;k<12;k++)g.fillRect(px,py+k*6,76,1);
   g.fillStyle='#86b3c4';g.fillRect(px+24,py,1,76);g.fillRect(px+51,py,1,76);
  }
 });
 texture(metalTex,(g,n)=>{
  panel(g,n,'#99a9b3');
  for(let x=0;x<n;x+=32){const gr=g.createLinearGradient(x,0,x+32,0);gr.addColorStop(0,'#73838e');gr.addColorStop(.25,'#bbc8cd');gr.addColorStop(.5,'#a1b0b8');gr.addColorStop(1,'#8798a3');g.fillStyle=gr;g.fillRect(x,0,32,n);}
  for(const y of [12,246,490]){g.fillStyle='#71828b';g.fillRect(0,y,n,7);g.fillStyle='#c8d3d7';g.fillRect(0,y,n,2);for(let x=16;x<n;x+=64){g.fillStyle='#485965';g.beginPath();g.arc(x,y+4,3,0,Math.PI*2);g.fill();}}
 });
 texture(roofTex,(g,n)=>{
  panel(g,n,'#526675');for(let x=0;x<n;x+=64){g.fillStyle='#364954';g.fillRect(x,0,5,n);g.fillStyle='#8396a0';g.fillRect(x+5,0,3,n);}
  g.strokeStyle='#b0bac0';g.lineWidth=5;g.strokeRect(3,3,506,506);
 });
 texture(padTex,(g,n)=>{
  panel(g,n,'#949e9f');let seed=83;const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
  for(let k=0;k<12000;k++){g.fillStyle=rand()>.5?'rgba(255,255,255,.09)':'rgba(25,42,49,.08)';g.fillRect(rand()*n,rand()*n,2,2);}
  g.strokeStyle='#647377';g.lineWidth=3;g.strokeRect(14,14,484,484);g.beginPath();g.moveTo(256,14);g.lineTo(256,498);g.moveTo(14,256);g.lineTo(498,256);g.stroke();
  g.save();g.beginPath();g.rect(17,17,478,18);g.clip();g.fillStyle='#25333a';g.fillRect(17,17,478,18);g.fillStyle='#e7b84b';for(let x=-20;x<n;x+=30){g.beginPath();g.moveTo(x,17);g.lineTo(x+15,17);g.lineTo(x+33,35);g.lineTo(x+18,35);g.fill();}g.restore();
 });
 solarMat.roughness=.27;solarMat.metalness=.38;metalMat.roughness=.58;metalMat.metalness=.32;roofMat.roughness=.72;
 const c=document.createElement('canvas');c.width=c.height=256;const a=c.getContext('2d');
 panel(a,256,'#293943');a.strokeStyle='#7a909c';a.lineWidth=7;a.strokeRect(4,4,248,248);
 a.fillStyle='#0e1c24';for(let y=22;y<240;y+=18){a.fillRect(17,y,222,10);a.fillStyle='#647983';a.fillRect(17,y,222,2);a.fillStyle='#0e1c24';}
 for(const x of [10,246])for(const y of [10,246]){a.fillStyle='#d5dee2';a.fillRect(x-2,y-2,4,4);}
 const ventTex=new THREE.CanvasTexture(c);ventTex.anisotropy=4;
 const ventMat=new THREE.MeshStandardMaterial({map:ventTex,roughness:.65,metalness:.25});
 const trimMat=new THREE.MeshStandardMaterial({color:'#293f4c',roughness:.5,metalness:.4});
 const vent=(g,x,y,z,w,h)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),ventMat);m.position.set(x,y,z);m.userData.noEdge=true;g.add(m);};
 const rail=(g,x,y,z,w,h,d)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),trimMat);m.position.set(x,y,z);m.castShadow=true;g.add(m);};
 const details={
  rig:g=>{vent(g,0,.38,.223,.18,.09);vent(g,-.16,.19,.242,.13,.2);},
  gpu:g=>{for(const x of [-.2,.2])for(const z of [-.2,.2])vent(g,x,.48,z+.157,.23,.09);},
  asic:g=>{vent(g,-.45,.25,.309,.34,.29);rail(g,-.05,.8,-.7,1.45,.035,.025);},
  datacenter:g=>{vent(g,.5,.28,.448,.4,.36);rail(g,0,.94,.43,1.68,.045,.035);},
  battery:g=>vent(g,0,.34,.248,.26,.15),
  diesel:g=>vent(g,-.12,.24,.174,.29,.23),
  transformer:g=>vent(g,0,.39,.211,.36,.1),
  warehouse:g=>{for(const x of [-.5,0,.5])vent(g,x,.2,.238,.31,.27);},
  office:g=>{rail(g,0,.35,.229,.58,.024,.025);rail(g,0,.59,.229,.58,.024,.025);},
  solar:g=>{rail(g,0,.11,0,.04,.06,1.64);},
  immersion:g=>vent(g,0,.15,.464,.12,.12),
  substation:g=>vent(g,.72,.24,-.583,.23,.15)
 };
 for(const [type,decorate] of Object.entries(details)){const original=MAKERS[type];MAKERS[type]=()=>{const g=original();decorate(g);return g;};}
 window.EmpyriaAssetTextures={solar:solarTex,metal:metalTex,roof:roofTex,concrete:padTex,vent:ventTex};
};

