document.addEventListener("DOMContentLoaded",()=>{if(window.lucide)lucide.createIcons();const b=document.getElementById("menuToggle"),n=document.getElementById("mobile-navigation");if(b&&n){b.addEventListener("click",()=>{n.hidden=!n.hidden;b.setAttribute("aria-expanded",String(!n.hidden));});n.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>n.hidden=true));}});
// approved-hero-loader
(async()=>{try{
 const parts=await Promise.all([1,2,3,4,5,6].map(i=>fetch(`assets/hero-b64-${i}.txt?v=1`).then(r=>{if(!r.ok)throw new Error("hero");return r.text()})));
 const img=document.getElementById("heroMain");
 if(img) img.src="data:image/webp;base64,"+parts.join("");
}catch(e){console.error("Hero image load failed",e);}})();
