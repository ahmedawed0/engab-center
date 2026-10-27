document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const toggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("mobile-navigation");
  if (!toggle || !navigation) return;

  const setMenuOpen = (open) => {
    navigation.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  };

  setMenuOpen(false);
  toggle.addEventListener("click", () => setMenuOpen(navigation.hidden));
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !navigation.hidden) {
      setMenuOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!navigation.hidden && !navigation.contains(event.target) && !toggle.contains(event.target)) {
      setMenuOpen(false);
    }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });
});
// approved-hero-loader
(async()=>{if(!document.getElementById('heroMain'))return;try{
 const parts=await Promise.all([1,2,3,4,5,6].map(i=>fetch(`assets/hero-b64-${i}.txt?v=1`).then(r=>{if(!r.ok)throw new Error("hero");return r.text()})));
 const img=document.getElementById("heroMain");
 if(img) img.src="data:image/webp;base64,"+parts.join("");
}catch(e){console.error("Hero image load failed",e);}})();


// Privacy-conscious contact interaction events for GA4.
// This records only contact/directions actions and generic UI placement.
// No phone numbers, WhatsApp message contents, patient details or medical inquiries are sent.
document.addEventListener("click", (event) => {
  const link = event.target.closest && event.target.closest("a[href]");
  if (!link) return;

  const href = link.getAttribute("href") || "";
  const isWhatsApp = /^https:\/\/(?:wa\.me|api\.whatsapp\.com)\//i.test(href);
  const isPhone = /^tel:/i.test(href);
  const isDirections = /^https:\/\/(?:maps\.app\.goo\.gl\/|(?:www\.)?google\.com\/maps(?:\/|\?|$))/i.test(href);
  if (!isWhatsApp && !isPhone && !isDirections) return;

  const placement = link.closest(".mobile-booking") ? "mobile_booking" :
    link.closest(".site-header") ? "header" :
    link.closest(".whatsapp-float") ? "floating" :
    link.closest(".site-footer") ? "footer" : "page";

  // The GA4 tag will be activated when its measurement ID is provided.
  if (typeof window.gtag === "function") {
    window.gtag("event", isWhatsApp ? "whatsapp_click" : isPhone ? "phone_click" : "directions_click", {
      contact_placement: isDirections ? "address" : placement,
      // Send contact-click events only to GA4, not to the Ads destination.
      send_to: 'G-HQF995FKQG'
    });
  }
});
