/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Contact section with email, phone, and a simple contact form
 * Dark card with glow border — EmailJS integration
 */

import { useEffect, useRef, useState } from "react";
import { Send, Zap, ShieldCheck, TrendingUp, Clock, Star, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ───────────────────────────────────────────────
// Replace these placeholders with your real EmailJS credentials:
//   SERVICE_ID  → EmailJS Dashboard > Email Services > Service ID
//   TEMPLATE_ID → EmailJS Dashboard > Email Templates > Template ID
//   PUBLIC_KEY  → EmailJS Dashboard > Account > Public Key
const EMAILJS_SERVICE_ID  = "service_n1wfeli";
const EMAILJS_TEMPLATE_ID = "template_0lfdf5a";
const EMAILJS_PUBLIC_KEY  = "HmoqS3YvZcHkqak6q";
// ─────────────────────────────────────────────────────────────────

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const templateParams = {
      from_name:     formData.name,
      from_email:    formData.email,
      phone_number:  formData.phone || "Not provided",
      business_name: formData.business || "Not provided",
      message:       formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", business: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-[#0D1B2A] border border-[#1E3A5F]/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563EB]/60 focus:ring-1 focus:ring-[#2563EB]/30 transition-all";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-[#0A1520] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#06B6D4] font-mono-label text-sm tracking-widest uppercase">
              Contact
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#2563EB]/40 to-transparent" />
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Let's Build Your <span className="text-gradient">Website</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Ready to get more customers online? Tell me about your business and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Why Work With Me */}
            <div className="mb-6">
              <p className="text-[#06B6D4] font-mono-label text-xs tracking-widest uppercase mb-3">Why choose us</p>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Fast Turnaround", desc: "Most websites delivered in 7–14 days, not months." },
                  { icon: TrendingUp, title: "Built to Convert", desc: "Every page is designed to turn visitors into paying customers." },
                  { icon: ShieldCheck, title: "Industry Expertise", desc: "Specialized in blue collar businesses — we speak your language." },
                  { icon: Clock, title: "Ongoing Support", desc: "We don't disappear after launch. We're your long-term partner." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/25 transition-colors">
                      <Icon size={16} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Contact */}
            <a
              href="mailto:joshwebsitesbluecollar@gmail.com"
              className="flex items-center gap-4 bg-[#162032] rounded-2xl p-4 border border-[#1E3A5F]/60 hover:border-[#2563EB]/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/25 transition-colors">
                <Send size={16} className="text-[#2563EB]" />
              </div>
              <div>
                <div className="text-slate-400 text-xs font-mono-label uppercase tracking-widest mb-0.5">Email Us</div>
                <div className="text-white font-semibold text-sm group-hover:text-[#06B6D4] transition-colors">joshwebsitesbluecollar@gmail.com</div>
              </div>
            </a>

            {/* Skill Bars */}
            <div className="bg-[#162032] rounded-2xl p-5 border border-[#1E3A5F]/60">
              <div className="flex items-center gap-2 mb-4">
                <Star size={14} className="text-[#06B6D4]" />
                <span className="text-[#06B6D4] font-mono-label text-xs tracking-widest uppercase">Expertise</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Web Design & UI/UX", pct: 98 },
                  { label: "SEO & Lead Generation", pct: 92 },
                  { label: "Mobile Optimization", pct: 96 },
                  { label: "Conversion Rate Optimization", pct: 88 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{label}</span>
                      <span className="text-[#06B6D4] font-mono-label">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-[#0D1B2A] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] transition-all duration-1000"
                        style={{ width: visible ? `${pct}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-[#162032] rounded-2xl p-8 border border-[#1E3A5F]/60">
              <h3 className="font-display font-bold text-white text-xl mb-6">
                Start Your Project
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#059669]/20 border border-[#059669]/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-[#059669]" />
                  </div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">Message Sent!</h4>
                  <p className="text-slate-400">Thanks! We received your message and will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#2563EB] text-sm underline underline-offset-2 hover:text-[#06B6D4] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-mono-label mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        className={inputClass}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-mono-label mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className={inputClass}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-mono-label mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        className={inputClass}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-mono-label mb-2">Business Name</label>
                      <input
                        type="text"
                        placeholder="Your Business Name"
                        className={inputClass}
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-mono-label mb-2">Tell Me About Your Project *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="What type of business do you have? What are your goals for the website?"
                      className={`${inputClass} resize-none`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl agency-gradient text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                  <p className="text-slate-500 text-xs text-center">
                    We typically respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
