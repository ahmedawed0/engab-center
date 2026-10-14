document.addEventListener("DOMContentLoaded",()=>{if(window.lucide)lucide.createIcons();const b=document.getElementById("menuToggle"),n=document.getElementById("mobile-navigation");if(b&&n){b.addEventListener("click",()=>{n.hidden=!n.hidden;b.setAttribute("aria-expanded",String(!n.hidden));});n.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>n.hidden=true));}});
// approved-hero-loader
(async()=>{if(!document.getElementById('heroMain'))return;try{
 const parts=await Promise.all([1,2,3,4,5,6].map(i=>fetch(`assets/hero-b64-${i}.txt?v=1`).then(r=>{if(!r.ok)throw new Error("hero");return r.text()})));
 const img=document.getElementById("heroMain");
 if(img) img.src="data:image/webp;base64,"+parts.join("");
}catch(e){console.error("Hero image load failed",e);}})();


// Privacy-conscious contact interaction events for GA4.
// This records only the contact method and generic UI placement.
// No phone numbers, WhatsApp message contents, patient details or medical inquiries are sent.
document.addEventListener("click", (event) => {
  const link = event.target.closest && event.target.closest("a[href]");
  if (!link) return;

  const href = link.getAttribute("href") || "";
  const isWhatsApp = /^https:\/\/(?:wa\.me|api\.whatsapp\.com)\//i.test(href);
  const isPhone = /^tel:/i.test(href);
  if (!isWhatsApp && !isPhone) return;

  const placement = link.closest(".mobile-booking") ? "mobile_booking" :
    link.closest(".site-header") ? "header" :
    link.closest(".whatsapp-float") ? "floating" :
    link.closest(".site-footer") ? "footer" : "page";

  // The GA4 tag will be activated when its measurement ID is provided.
  if (typeof window.gtag === "function") {
    window.gtag("event", isWhatsApp ? "whatsapp_click" : "phone_click", {
      contact_placement: placement,
      // Send contact-click events only to GA4, not to the Ads destination.
      send_to: 'G-HQF995FKQG'
    });
  }
});
