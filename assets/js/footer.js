/* Shared footer — injected on every page so links stay consistent.
   Payment logos (Visa / Mastercard / Discover / Apple Pay / Google Pay)
   are shown because card and wallet payments are accepted on the web
   in addition to Apple App Store billing. */
(function () {
  var VISA =
    '<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visa"><rect width="48" height="32" rx="4" fill="#fff"/><path d="M20.3 21.2h-2.6l1.6-9.9h2.6l-1.6 9.9Zm9.4-9.7c-.5-.2-1.3-.4-2.3-.4-2.5 0-4.3 1.3-4.3 3.2 0 1.4 1.3 2.2 2.3 2.6 1 .5 1.3.8 1.3 1.2 0 .6-.8.9-1.5.9-1 0-1.6-.2-2.4-.5l-.3-.2-.4 2.2c.6.3 1.7.5 2.8.5 2.7 0 4.4-1.3 4.4-3.3 0-1.1-.7-2-2.2-2.6-.9-.5-1.4-.8-1.4-1.2 0-.4.5-.8 1.5-.8.8 0 1.4.2 1.9.4l.2.1.4-2.1Zm6.7-.2h-2c-.6 0-1.1.2-1.4.9l-3.9 9.2h2.7l.6-1.5h3.3l.3 1.5h2.4l-2.1-9.1Zm-3.2 6.4 1.1-2.9c0 .1.2-.6.4-1l.2.9.6 3h-2.3Zm-14.3-6.4-2.6 6.8-.3-1.4c-.5-1.6-2-3.4-3.6-4.3l2.4 8.8h2.7l4.1-9.9h-2.7Z" fill="#1a1f71"/><path d="M11.9 11.3H7.7l0 .2c3.3.8 5.4 2.8 6.3 5.2l-.9-4.5c-.2-.7-.6-.9-1.2-.9Z" fill="#f7b600"/></svg>';
  var MC =
    '<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mastercard"><rect width="48" height="32" rx="4" fill="#fff"/><circle cx="19" cy="16" r="9" fill="#eb001b"/><circle cx="29" cy="16" r="9" fill="#f79e1b"/><path d="M24 9.2a9 9 0 0 0 0 13.6 9 9 0 0 0 0-13.6Z" fill="#ff5f00"/></svg>';
  var DISCOVER =
    '<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Discover"><rect width="48" height="32" rx="4" fill="#fff"/><path d="M46 32H22S34 26 44 15c1.4-1.5 2-3 2-4.4V32Z" fill="#f27712"/><circle cx="24" cy="12.7" r="3.4" fill="#f27712"/><text x="4" y="15.4" font-family="Arial, sans-serif" font-size="6.2" font-weight="700" fill="#111">DISC</text><text x="27.5" y="15.4" font-family="Arial, sans-serif" font-size="6.2" font-weight="700" fill="#111">VER</text></svg>';
  var APPLEPAY =
    '<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apple Pay"><rect width="48" height="32" rx="4" fill="#fff"/><path d="M13.6 11.3c.5-.6.8-1.4.7-2.3-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.7 2.2.8.1 1.6-.4 2.1-1Zm.7 1.1c-1.2-.1-2.2.7-2.7.7-.6 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.8-1.2 2.1-.3 5.3.9 7 .6.9 1.3 1.8 2.2 1.8.9 0 1.2-.6 2.3-.6 1.1 0 1.3.6 2.3.6 1 0 1.6-.9 2.2-1.7.7-1 1-1.9 1-2-.1 0-1.9-.7-1.9-2.8 0-1.7 1.4-2.5 1.5-2.6-.8-1.2-2.1-1.4-2.6-1.4Z" fill="#111"/><text x="20.5" y="20.4" font-family="Arial, sans-serif" font-size="8.4" font-weight="600" fill="#111">Pay</text></svg>';
  var GOOGLEPAY =
    '<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google Pay"><rect width="48" height="32" rx="4" fill="#fff"/><path d="M23.6 16.2c0-.6-.1-1.2-.2-1.7h-4.6v3.2h2.7c-.1.7-.5 1.3-1 1.7v1.4h1.7c1-.9 1.6-2.3 1.6-4Z" fill="#4285f4"/><path d="M18.8 21c1.4 0 2.5-.5 3.4-1.2l-1.7-1.4c-.5.3-1 .5-1.7.5-1.3 0-2.4-.9-2.8-2.1h-1.7v1.4c.8 1.7 2.5 2.8 4.5 2.8Z" fill="#34a853"/><path d="M16 15.8c-.2-.6-.2-1.3 0-1.9v-1.4h-1.7c-.7 1.4-.7 3.1 0 4.5l1.7-1.2Z" fill="#fbbc04"/><path d="M18.8 12.4c.7 0 1.4.3 1.9.8l1.5-1.5c-.9-.9-2.1-1.4-3.4-1.4-2 0-3.7 1.1-4.5 2.8l1.7 1.4c.4-1.2 1.5-2.1 2.8-2.1Z" fill="#ea4335"/><text x="25.5" y="19.6" font-family="Arial, sans-serif" font-size="7.4" font-weight="600" fill="#5f6368">Pay</text></svg>';

  var year = document.currentScript.getAttribute("data-year") || "2026";

  var html = [
    '<div class="wrap">',
    '  <div class="footer-grid">',
    '    <div class="footer-brand">',
    '      <div class="brand"><span class="logo-mark"><svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="32" height="32" rx="10" fill="#c8f73c"/><path d="M17 6.5c.7 4.8 1.9 6 6.7 6.7-4.8.7-6 1.9-6.7 6.7-.7-4.8-1.9-6-6.7-6.7 4.8-.7 6-1.9 6.7-6.7Z" fill="#111311"/><circle cx="24.6" cy="24" r="2.4" fill="#111311"/></svg></span>Romi</div>',
    '      <p>Make visual magic. An AR emoji &amp; social discovery app by Philomuse Limited.</p>',
    '      <div class="footer-pay"><div class="pay-logos">' + VISA + MC + DISCOVER + APPLEPAY + GOOGLEPAY + "</div></div>",
    "    </div>",
    "    <div><h5>Product</h5>",
    '      <a href="index.html#features">Features</a>',
    '      <a href="index.html#pricing">Pricing</a>',
    '      <a href="https://apps.apple.com/us/app/romi-make-visual-magic/id6746782904" target="_blank" rel="noopener">App Store</a>',
    "    </div>",
    "    <div><h5>Company</h5>",
    '      <a href="about.html">About &amp; Info</a>',
    '      <a href="support.html">Support</a>',
    "    </div>",
    "    <div><h5>Legal</h5>",
    '      <a href="terms.html">Terms of Service</a>',
    '      <a href="privacy.html">Privacy Policy</a>',
    '      <a href="refund.html">Refund &amp; Cancellation</a>',
    "    </div>",
    "  </div>",
    '  <div class="footer-legal">',
    "    <span>© " + year + " Philomuse Limited. All rights reserved.</span>",
    "    <span>FLAT 2401-16 Wing Shing Industrial Building, 26 Ng Fong Street, San Po Kong, Kowloon, Hong Kong</span>",
    "  </div>",
    "</div>",
  ].join("\n");

  var el = document.getElementById("site-footer");
  if (el) el.innerHTML = html;
})();
