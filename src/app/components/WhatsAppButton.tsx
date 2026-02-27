import React from "react";

const WHATSAPP_NUMBER = "201094045658"; // ← Replace with your real number (country code + number, no + or spaces)
const WHATSAPP_MESSAGE = "Hello! I'm interested in The Maker Football Incubator.";

export const WhatsAppButton = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
            aria-label="Chat on WhatsApp"
        >
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
                <path d="M16.004 0C7.165 0 .003 7.16.003 15.997c0 2.82.737 5.573 2.14 7.998L.004 32l8.27-2.107a15.94 15.94 0 007.73 1.972C24.843 31.865 32 24.705 32 15.997 32 7.16 24.843 0 16.004 0zm0 29.39a13.46 13.46 0 01-6.87-1.88l-.493-.293-5.11 1.34 1.363-4.983-.32-.51A13.413 13.413 0 012.48 15.997C2.48 8.53 8.537 2.477 16.004 2.477c7.466 0 13.52 6.054 13.52 13.52 0 7.467-6.054 13.393-13.52 13.393zm7.41-10.02c-.407-.203-2.407-1.187-2.78-1.323-.373-.137-.644-.203-.916.203-.27.407-1.05 1.323-1.287 1.594-.237.27-.474.304-.88.102-.407-.203-1.717-.633-3.27-2.017-1.21-1.077-2.027-2.407-2.264-2.813-.237-.407-.025-.627.178-.83.183-.183.407-.474.61-.71.204-.237.27-.407.407-.678.136-.27.068-.508-.034-.71-.102-.204-.916-2.21-1.254-3.024-.33-.795-.666-.687-.916-.7-.237-.01-.508-.013-.78-.013a1.497 1.497 0 00-1.084.508c-.373.407-1.423 1.39-1.423 3.39s1.457 3.93 1.66 4.2c.203.27 2.867 4.38 6.95 6.143.97.42 1.73.67 2.32.858.975.31 1.863.266 2.564.16.783-.116 2.407-.983 2.747-1.932.34-.95.34-1.763.237-1.932-.102-.17-.373-.27-.78-.474z"/>
            </svg>
        </a>
    );
};
