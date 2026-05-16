import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Check } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().min(1, "Required").max(150),
  phone: z.string().trim().min(5, "Required").max(30),
  email: z.string().trim().email("Invalid email").max(200),
  exhibition: z.string().trim().min(1, "Required").max(200),
  size: z.string().trim().min(1, "Required").max(50),
  brief: z.string().trim().max(2000).optional(),
});

type Form = z.infer<typeof schema>;

export function ContactSection() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<Form>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const STEPS: Array<{ key: keyof Form; label: string; type?: string; placeholder?: string; textarea?: boolean }> = [
    { key: "name", label: "Your name", placeholder: "Jane Doe" },
    { key: "company", label: "Company name", placeholder: "Acme Inc." },
    { key: "phone", label: "Phone number", type: "tel", placeholder: "+91 98765 43210" },
    { key: "email", label: "Email address", type: "email", placeholder: "you@company.com" },
    { key: "exhibition", label: "Exhibition name & location", placeholder: "Domotex, Hannover" },
    { key: "size", label: "Stall size", placeholder: "e.g. 36 sqm" },
    { key: "brief", label: "Brief (optional)", textarea: true, placeholder: "Tell us about your goals…" },
  ];

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  const next = () => {
    const value = (data[current.key] || "").toString();
    const fieldSchema = (schema.shape as Record<string, z.ZodTypeAny>)[current.key];
    const r = fieldSchema.safeParse(value === "" ? undefined : value);
    if (!r.success && current.key !== "brief") {
      setErrors({ [current.key]: r.error.issues[0]?.message || "Invalid" });
      return;
    }
    setErrors({});
    if (isLast) {
      const all = schema.safeParse(data);
      if (all.success) setDone(true);
      return;
    }
    setStep((s) => s + 1);
  };

  return (
    <section id="contact" className="border-t border-border bg-background">
      <div className="grid md:grid-cols-2">
        {/* LEFT */}
        <div className="border-b border-border bg-surface p-10 md:border-b-0 md:border-r md:p-16 lg:p-20">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">Contact</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl text-balance">
            Let's Build<br />Something Great.
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-silver">
            Tell us about your show. We'll respond within one business day with next steps and a rough timeline.
          </p>

          <div className="mt-10 space-y-5 text-sm font-light text-foreground/85">
            <a href="mailto:hello@silverline.events" className="flex items-start gap-4 hover:text-foreground">
              <Mail className="h-5 w-5 shrink-0 text-silver" strokeWidth={1.5} />
              <span>hello@silverline.events</span>
            </a>
            <a href="tel:+17049561954" className="flex items-start gap-4 hover:text-foreground">
              <Phone className="h-5 w-5 shrink-0 text-silver" strokeWidth={1.5} />
              <span>+1 (704) 956-1954</span>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-silver" strokeWidth={1.5} />
              <span>233, 2nd Floor, IJMIMA Complex,<br />Mindspace, Malad West, Mumbai 400064</span>
            </div>
          </div>

          <a
            href="https://wa.me/917049561954"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-silver/40 px-6 py-3 text-sm font-light text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <MessageCircle className="h-4 w-4" />
            Chat With Us on WhatsApp
          </a>
        </div>

        {/* RIGHT */}
        <div className="p-10 md:p-16 lg:p-20">
          {done ? (
            <div className="flex h-full flex-col items-start justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-silver">
                <Check className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mt-8 font-display text-3xl font-bold text-foreground md:text-4xl">
                Enquiry received.
              </h3>
              <p className="mt-4 max-w-md text-base font-light text-silver">
                Thanks{data.name ? `, ${data.name.split(" ")[0]}` : ""}. We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-silver-muted">
                <span>Enquiry · Step {step + 1} of {STEPS.length}</span>
                <div className="flex flex-1 justify-end gap-1.5">
                  {STEPS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-px w-6 transition-colors ${i <= step ? "bg-foreground" : "bg-border"}`}
                    />
                  ))}
                </div>
              </div>

              <label className="block text-xs uppercase tracking-[0.3em] text-silver">
                {current.label}
              </label>
              {current.textarea ? (
                <textarea
                  value={(data[current.key] || "") as string}
                  onChange={(e) => setData({ ...data, [current.key]: e.target.value })}
                  placeholder={current.placeholder}
                  rows={5}
                  className="mt-4 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-2xl font-light text-foreground outline-none placeholder:text-silver-muted/40 focus:border-foreground"
                />
              ) : (
                <input
                  autoFocus
                  type={current.type || "text"}
                  value={(data[current.key] || "") as string}
                  onChange={(e) => setData({ ...data, [current.key]: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), next())}
                  placeholder={current.placeholder}
                  className="mt-4 w-full border-0 border-b border-border bg-transparent py-3 text-2xl font-light text-foreground outline-none placeholder:text-silver-muted/40 focus:border-foreground md:text-3xl"
                />
              )}
              {errors[current.key] && (
                <p className="mt-2 text-xs text-coral">{errors[current.key]}</p>
              )}

              <div className="mt-10 flex items-center gap-4">
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="text-sm font-light text-silver hover:text-foreground"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={next}
                  className="group ml-auto inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-4"
                >
                  {isLast ? "Send Enquiry" : "Continue"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
