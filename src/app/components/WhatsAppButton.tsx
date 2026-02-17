import React from "react";

const WHATSAPP_NUMBER = "201000000000"; // ← Replace with your real number (country code + number, no + or spaces)
const WHATSAPP_MESSAGE = "Hello! I'm interested in The Maker Football Incubator.";

export const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0C7.165 0 .003 7.16.003 15.997c0 2.82.737 5.573 2.14 7.998L.004 32l8.27-2.107a15.94 15.94 0 007.73 1.97C24.843 31.863 32 24.703 32 15.997 32 7.16 24.843 0 16.004 0zm0 29.316a13.27 13.27 0 01-7.23-2.126l-.518-.308-4.907 1.25 1.31-4.77-.338-.537A13.24 13.24 0 012.55 15.997c0-7.41 6.044-13.45 13.454-13.45 7.41 0 13.45 6.04 13.45 13.45 0 7.414-6.04 13.454-13.45 13.32zm7.38-10.078c-.404-.202-2.393-1.18-2.764-1.314-.37-.136-.64-.202-.91.202-.27.404-1.047 1.314-1.284 1.585-.236.27-.473.304-.877.102-.404-.202-1.706-.628-3.25-2.004-1.202-1.07-2.013-2.393-2.249-2.797-.236-.404-.025-.623.177-.824.182-.182.404-.473.607-.71.202-.236.27-.404.404-.674.136-.27.068-.506-.034-.71-.102-.202-.91-2.192-1.247-3.001-.328-.788-.662-.681-.91-.694-.236-.012-.506-.015-.776-.015s-.71.102-1.08.506c-.371.404-1.416 1.384-1.416 3.374s1.45 3.913 1.652 4.183c.202.27 2.853 4.353 6.913 6.104.966.417 1.72.666 2.308.852.97.308 1.852.265 2.55.16.777-.116 2.393-.978 2.731-1.922.338-.944.338-1.754.236-1.922-.101-.168-.37-.27-.775-.473z"/>
      </svg>
    </a>
  );
};
