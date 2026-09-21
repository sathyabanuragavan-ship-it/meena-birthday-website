
const menu=document.querySelector(".menu");
const links=document.querySelector(".navlinks");
if(menu && links) menu.addEventListener("click",()=>links.classList.toggle("open"));

const petalBox=document.querySelector(".petals");
if(petalBox){
  const symbols=["🌸","🌷","✿","♡"];
  for(let i=0;i<20;i++){
    const p=document.createElement("span");
    p.className="petal";
    p.textContent=symbols[i%symbols.length];
    p.style.left=(Math.random()*100)+"%";
    p.style.animationDuration=(8+Math.random()*10)+"s";
    p.style.animationDelay=(-Math.random()*15)+"s";
    p.style.fontSize=(13+Math.random()*15)+"px";
    petalBox.appendChild(p);
  }
}

let candles=document.querySelectorAll(".candle").length;
document.querySelectorAll(".candle").forEach(c=>{
  c.addEventListener("click",()=>{
    const flame=c.querySelector(".flame");
    if(!flame || flame.classList.contains("off")) return;
    flame.classList.add("off");
    candles--;
    const note=document.querySelector("#cakeNote");
    if(note){
      note.textContent=candles ? `Keep going... ${candles} candle${candles===1?"":"s"} left ✨` : "Make your wish, Meena. ✨";
    }
    if(candles===0){
      for(let i=0;i<55;i++){
        const x=document.createElement("span");
        x.className="confetti";
        x.textContent=["✦","♥","✿"][i%3];
        x.style.left=(Math.random()*100)+"vw";
        x.style.animationDelay=(Math.random()*.8)+"s";
        document.body.appendChild(x);
        setTimeout(()=>x.remove(),3800);
      }
    }
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
