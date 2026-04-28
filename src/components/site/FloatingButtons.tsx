import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(true);
  return (
    <>
      <div className="fixed bottom-6 left-4 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/917500766615"
          aria-label="WhatsApp"
          className="h-12 w-12 rounded-full bg-green-500 text-white grid place-items-center shadow-lg animate-pulse-ring hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="tel:+917500766615"
          aria-label="Call us"
          className="h-12 w-12 rounded-full bg-green-600 text-white grid place-items-center shadow-lg animate-pulse-ring hover:bg-green-700 transition-colors"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {chatOpen && (
        <div className="fixed bottom-6 right-4 z-40 flex items-center gap-2 bg-white border rounded-full shadow-xl pl-4 pr-2 py-2 animate-fade-in">
          <span className="text-sm font-semibold text-brand-orange">We Are Here!</span>
          <div className="h-9 w-9 rounded-full bg-brand-orange text-white grid place-items-center">
            <MessageCircle className="h-5 w-5" />
          </div>
          <button
            onClick={() => setChatOpen(false)}
            aria-label="Close chat"
            className="h-5 w-5 rounded-full bg-gray-200 grid place-items-center text-gray-600 hover:bg-gray-300"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
    </>
  );
}
