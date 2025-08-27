import { MessageCircle } from "lucide-react";
import { business } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zemen Homes on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex items-center justify-center bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6"
      style={{ borderRadius: "50%", height: "3.25rem", width: "3.25rem" }}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} fill="white" />
    </a>
  );
}
