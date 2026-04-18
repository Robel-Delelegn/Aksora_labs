import { siteConfig } from "@/lib/site-data";

function buildWhatsAppHref() {
  const sanitizedNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
  const query = encodeURIComponent(siteConfig.whatsappMessage);

  return `https://wa.me/${sanitizedNumber}?text=${query}`;
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.12 0C5.43 0 0 5.43 0 12.12c0 2.13.56 4.22 1.62 6.06L0 24l5.99-1.57a12.05 12.05 0 0 0 6.1 1.66h.01c6.68 0 12.1-5.43 12.1-12.12 0-3.23-1.25-6.27-3.68-8.49Zm-8.4 18.57h-.01a9.98 9.98 0 0 1-5.08-1.39l-.36-.21-3.55.93.95-3.46-.23-.36A10 10 0 1 1 12.12 22.05Z" />
      <path d="M8.44 6.92c-.27-.61-.56-.62-.77-.63h-.66c-.22 0-.58.08-.88.4-.3.33-1.15 1.12-1.15 2.73s1.17 3.16 1.33 3.38c.16.22 2.28 3.64 5.62 4.97 2.77 1.09 3.33.87 3.93.82.6-.05 1.9-.78 2.16-1.54.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38-.31-.17-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.31-.8 1.03-.99 1.24-.19.22-.38.24-.69.08-.31-.17-1.33-.49-2.53-1.57-.94-.84-1.57-1.88-1.76-2.2-.19-.33-.02-.5.15-.67.15-.15.31-.38.46-.56.16-.19.21-.33.31-.55.1-.22.05-.41-.03-.57-.08-.17-.71-1.73-.98-2.38Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppHref()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      title="WhatsApp"
      className="whatsapp-float"
    >
      <span className="sr-only">Chat with Aksora Labs on WhatsApp</span>
      <span className="whatsapp-float__bubble">
        <WhatsAppIcon />
      </span>
    </a>
  );
}
