/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Terms of Service page — clean legal content on dark background
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = "Terms of Service | Websites Blue Collar";
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
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-slate-400 leading-relaxed">

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website <span className="text-[#06B6D4]">www.websitesbluecollar.com</span> or engaging Websites Blue Collar for web design and related services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
            <p className="mt-3">
              These Terms apply to all visitors, clients, and others who access or use our services. Websites Blue Collar is operated by Josh Weaver ("we," "us," or "our").
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">2. Services</h2>
            <p className="mb-3">Websites Blue Collar provides the following services:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#2563EB]">
              <li>Custom website design and development</li>
              <li>Search engine optimization (SEO)</li>
              <li>Website hosting setup and management</li>
              <li>Mobile-first responsive design</li>
              <li>Lead generation and conversion optimization</li>
              <li>Ongoing website maintenance and support</li>
            </ul>
            <p className="mt-3">
              The specific scope, deliverables, timeline, and pricing for each project will be outlined in a separate written agreement or proposal provided to the client prior to commencement of work.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">3. Client Responsibilities</h2>
            <p className="mb-3">As a client, you agree to:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#2563EB]">
              <li>Provide accurate, complete, and timely information required for project completion</li>
              <li>Supply all necessary content (text, images, logos) in a timely manner</li>
              <li>Review and provide feedback on deliverables within agreed timeframes</li>
              <li>Ensure you have the legal right to use any content or materials you provide to us</li>
              <li>Make payments according to the agreed payment schedule</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">4. Payment Terms</h2>
            <p>
              Payment terms will be specified in the individual project agreement. Generally, a deposit is required before work begins, with the remaining balance due upon project completion or as outlined in the project proposal. All fees are non-refundable unless otherwise stated in writing.
            </p>
            <p className="mt-3">
              Late payments may result in suspension of services or project delays. We reserve the right to charge interest on overdue balances at a rate of 1.5% per month.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">5. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, the client receives ownership of the final website design and custom code created specifically for their project. Websites Blue Collar retains the right to display the completed work in our portfolio and marketing materials.
            </p>
            <p className="mt-3">
              Any third-party assets (fonts, stock images, plugins, frameworks) used in the project remain subject to their respective licenses. We will inform clients of any licensing requirements or restrictions.
            </p>
            <p className="mt-3">
              Prior to full payment, all work product remains the intellectual property of Websites Blue Collar.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">6. Revisions and Scope Changes</h2>
            <p>
              Each project includes a defined number of revision rounds as specified in the project agreement. Additional revisions or changes that fall outside the agreed scope will be billed at our standard hourly rate. Significant scope changes may require a new or amended project agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Websites Blue Collar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our services or website.
            </p>
            <p className="mt-3">
              Our total liability to you for any claim arising from our services shall not exceed the total amount paid by you to us in the three (3) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">8. Warranties and Disclaimers</h2>
            <p>
              We warrant that our services will be performed in a professional and workmanlike manner. However, we do not guarantee specific business results, search engine rankings, or revenue outcomes from websites we build.
            </p>
            <p className="mt-3">
              Our website and portfolio are provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">9. Termination</h2>
            <p>
              Either party may terminate a project agreement with written notice. In the event of termination by the client, payment is due for all work completed up to the termination date. In the event of termination by Websites Blue Collar due to client breach, the client forfeits any deposit paid.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation, and if necessary, binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">11. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a revised "Last updated" date. Continued use of our website or services after changes are posted constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-xl mb-3">12. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-white transition-colors cursor-pointer text-[#06B6D4]">Terms of Service</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
