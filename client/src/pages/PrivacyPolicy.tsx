/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Privacy Policy page — clean legal content on dark background
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = "Privacy Policy | Websites Blue Collar";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    document.head.appendChild(meta);
    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
    };
  }, []);

  const lastUpdated = "February 26, 2026";

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-slate-300">
      {/* Top Nav */}
      <nav className="border-b border-[#1E3A5F]/40 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">
              <ArrowLeft size={16} />
              Back to Home
            </span>
          </Link>
          <span className="font-display font-bold text-white text-lg">
            Websites <span className="text-gradient">Blue Collar</span>
          </span>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#06B6D4] font-mono-label text-xs tracking-widest uppercase">Legal</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#2563EB]/40 to-transparent" />
          </div>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-slate-400 leading-relaxed">

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">1. Introduction</h2>
            <p>
              Websites Blue Collar ("we," "our," or "us"), operated by Josh Weaver, is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className="text-[#06B6D4]">www.websitesbluecollar.com</span> or contact us through any of our channels.
            </p>
            <p className="mt-3">
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <div className="space-y-3 pl-4 border-l border-[#2563EB]/30">
              <div>
                <span className="text-white font-semibold">Personal Identification Information:</span> Name, email address, phone number, and business name — provided voluntarily when you fill out our contact form or reach out to us directly.
              </div>
              <div>
                <span className="text-white font-semibold">Usage Data:</span> Information your browser sends automatically, including IP address, browser type, pages visited, and time spent on our site.
              </div>
              <div>
                <span className="text-white font-semibold">Communications:</span> Any messages, emails, or inquiries you send us may be retained for business and legal purposes.
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#2563EB]">
              <li>Respond to your project inquiries and provide quotes</li>
              <li>Deliver web design and development services you have requested</li>
              <li>Improve our website and service offerings</li>
              <li>Send you updates or follow-up communications related to your project</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p className="mt-3">We do <span className="text-white font-semibold">not</span> sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">4. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our site may not function properly without cookies.
            </p>
            <p className="mt-3">
              We may also use third-party analytics services (such as Google Analytics) that collect anonymized usage data to help us understand how visitors interact with our site.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">5. Data Security</h2>
            <p>
              We implement commercially reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, including client websites featured in our portfolio. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">7. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">8. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#2563EB]">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <span className="text-[#06B6D4]">joshwebsitesbluecollar@gmail.com</span>.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">9. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-4 bg-[#162032] rounded-xl p-5 border border-[#1E3A5F]/60 inline-block">
              <p className="text-white font-semibold">Websites Blue Collar</p>
              <p className="text-slate-400 text-sm mt-1">Founder: Josh Weaver</p>
              <p className="text-[#06B6D4] text-sm mt-1">joshwebsitesbluecollar@gmail.com</p>
              <p className="text-slate-400 text-sm mt-1">www.websitesbluecollar.com</p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1E3A5F]/40 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <span>© {new Date().getFullYear()} Websites Blue Collar. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy">
              <span className="hover:text-white transition-colors cursor-pointer text-[#06B6D4]">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
