import { useEffect, useState } from "react";

// 👉 Update the WhatsApp number here (international format, no '+' or spaces)
const PHONE_NUMBER = "918591854358";
const PREFILLED_MESSAGE = "Hello, I'm interested in your services!";
const WA_LINK = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.464-1.318.142-.372.142-.7.085-.87-.07-.215-.4-.402-.86-.616z M15.998 4C9.378 4 4 9.378 4 15.998c0 2.31.665 4.526 1.92 6.443L4 28l5.766-1.882a11.965 11.965 0 0 0 6.232 1.732h.006c6.62 0 11.997-5.376 11.997-11.998 0-3.21-1.25-6.222-3.518-8.49C22.214 5.097 19.21 4 15.998 4zm0 21.892h-.005a9.962 9.962 0 0 1-5.077-1.39l-.364-.216-3.422 1.117 1.122-3.34-.236-.376a9.96 9.96 0 0 1-1.527-5.29c0-5.51 4.483-9.992 9.998-9.992a9.93 9.93 0 0 1 7.066 2.927 9.93 9.93 0 0 1 2.928 7.067c0 5.51-4.482 9.993-9.992 9.993z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);

  // Auto-open after 3s (only once)
  useEffect(() => {
    const t = setTimeout(() => {
      if (!autoOpened) {
        setOpen(true);
        setAutoOpened(true);
      }
    }, 3000);
    return () => clearTimeout(t);
  }, [autoOpened]);

  // Animate bubble after popup opens
  useEffect(() => {
    if (open) {
      setShowBubble(false);
      const t = setTimeout(() => setShowBubble(true), 600);
      return () => clearTimeout(t);
    }
  }, [open]);

  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Popup */}
      {open && (
        <div
          className="w-[320px] max-w-[calc(100vw-3rem)] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 animate-in fade-in slide-in-from-bottom-4 duration-300"
          role="dialog"
          aria-label="WhatsApp chat"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
              SE
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-bold text-white">
                Silverline Events &amp; Exhibition
              </p>
              <p className="text-xs text-green-100/80">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Chat area */}
          <div
            className="relative min-h-[180px] px-4 py-5"
            style={{
              backgroundColor: "#ECE5DD",
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            {showBubble ? (
              <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm animate-in fade-in slide-in-from-left-2 duration-300">
                <p className="text-[11px] font-semibold text-[#075E54]">
                  Silverline Events
                </p>
                <p className="mt-0.5 text-sm text-gray-800">
                  Greetings from Silverline! 👋
                  <br />
                  How can I help you?
                </p>
                <p className="mt-1 text-right text-[10px] text-gray-500">{now}</p>
              </div>
            ) : (
              <div className="flex max-w-[60px] items-center gap-1 rounded-lg rounded-tl-none bg-white px-3 py-3 shadow-sm">
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 bg-[#25D366] py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5a]"
          >
            💬 Let's Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
      >
        {!open && (
          <>
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
            <span className="absolute inset-0 animate-pulse rounded-full bg-[#25D366]/40" />
          </>
        )}
        <WhatsAppIcon className="relative h-7 w-7" />
      </button>
    </div>
  );
}
