import React from "react";

export default function Home() {
  const services = [
    {
      title: "GST Filing & Compliance",
      desc: "Comprehensive GST registration, monthly/quarterly filings, annual reconciliations, and departmental audit representation.",
      icon: "📊",
    },
    {
      title: "Corporate & Direct Tax Planning",
      desc: "Strategic income tax planning, advance tax management, and structured advisory for domestic entities and firms.",
      icon: "💼",
    },
    {
      title: "Accounting & Statutory Audit",
      desc: "End-to-end bookkeeping, preparation of balance sheets, internal compliance audits, and financial reporting.",
      icon: "📑",
    },
    {
      title: "Business Loans & Project Finance",
      desc: "CMA reports, project feasibility documentation, working capital financing, and MSME subsidy coordination.",
      icon: "🏦",
    },
    {
      title: "Corporate Structuring & Incorporation",
      desc: "LLP incorporation, Private Limited registrations, ROC filings, and regulatory licensing across Andhra Pradesh.",
      icon: "⚖️",
    },
    {
      title: "Legal & Corporate Secretarial",
      desc: "Drafting commercial contracts, partnership deeds, resolution drafting, and compliance maintenance.",
      icon: "🛡️",
    },
  ];

  return (

    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Tax Edge Fin Solutions LLP",
            "image": "https://taxedgefinsolutions.com/logo.png",
            "@id": "https://taxedgefinsolutions.com",
            "url": "https://taxedgefinsolutions.com",
            "telephone": "+919985301213",
            "email": "info@taxedgefinsolutions.com",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "D.No. 54-14/15-48A, Road No. 11, A.P.U.H.S, Bharathi Nagar",
              "addressLocality": "Vijayawada",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "520008",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 16.5062,
              "longitude": 80.6480
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "10:00",
              "closes": "19:00"
            }
          }),
        }}
      />
      {/* Top Bar */}
      <div className="border-b border-neutral-800 bg-neutral-900/60 backdrop-blur text-xs text-neutral-400 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span>📍 Bharathi Nagar, Vijayawada, AP – 520008</span>
            <span className="hidden md:inline text-neutral-600">|</span>
            <span className="hidden md:inline">LLPIN: ACY-9265</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919985301213" className="hover:text-orange-400 transition-colors">
              +91 99853 01213
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href="mailto:info@taxedgefinsolutions.com"
              className="hover:text-orange-400 transition-colors"
            >
              info@taxedgefinsolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-lg font-bold tracking-tight text-white block">
                TAX EDGE <span className="text-orange-500 font-semibold text-sm tracking-wide">FIN SOLUTIONS</span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">
                Taxation • Finance • Corporate Advisory
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919985301213"
              className="hidden sm:inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-500 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              <span>Call Desk</span>
            </a>
            <a
              href="https://wa.me/919985301213"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-neutral-950 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md shadow-orange-600/30"
            >
              <span>Schedule Consultation</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-4 sm:px-8 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          {/* Logo prominently placed before the badge */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="Tax Edge Fin Solutions Logo"
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(249,115,22,0.2)]"
            />
          </div>

          <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 rounded-full text-xs font-semibold text-orange-400 uppercase tracking-widest mb-6">
            Institutional-Grade Financial & Regulatory Advisory
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Strategic Financial Clarity for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Growing Enterprises & Corporates
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We partner with businesses, startups, and established enterprises across Vijayawada, Guntur, and Andhra Pradesh to deliver integrated taxation, corporate compliance, and structured finance advisory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919985301213"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-neutral-950 font-bold text-base transition-all shadow-xl shadow-orange-600/25 flex items-center justify-center gap-2"
            >
              <span>Initiate Direct Consultation</span>
              <span>💬</span>
            </a>
            <a
              href="tel:+919985301213"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <span>Speak with an Advisor</span>
              <span>📞</span>
            </a>
          </div>
        </div>

        {/* Corporate Trust Badges */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-neutral-800/80 text-center">
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-neutral-400 tracking-wider uppercase mt-1">Compliance Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Full-Suite</div>
            <div className="text-xs text-neutral-400 tracking-wider uppercase mt-1">Corporate & MSME Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Tier-1</div>
            <div className="text-xs text-neutral-400 tracking-wider uppercase mt-1">Tax Audit Advisory</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Direct</div>
            <div className="text-xs text-neutral-400 tracking-wider uppercase mt-1">Partner Consultation</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-8 bg-neutral-900/50 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-2">
              Capabilities & Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Precision Solutions for Every Stage of Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80">
                  <a
                    href="https://wa.me/919985301213"
                    className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5"
                  >
                    <span>Request Details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Contact & Office Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 sm:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-2">
                  Head Office & Advisory
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                  Tax Edge Fin Solutions LLP
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                  Direct client meetings and institutional filings handled through our Vijayawada office. For filings, audits, or appointment bookings, get in touch directly.
                </p>
                <div className="text-xs text-neutral-500 space-y-1">
                  <div>LLPIN: ACY-9265</div>
                  <div>Designated Partners: Kanakababu Lam, Jeevankumar Lam</div>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-neutral-800/80 bg-neutral-900/60 p-6 rounded-xl">
                  <div className="text-orange-400 text-xl mb-3">📍</div>
                  <h4 className="text-white font-semibold text-base mb-2">Office Address</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    D.No. 54-14/15-48A, Road No. 11, <br />
                    A.P.U.H.S, Bharathi Nagar, <br />
                    Vijayawada (Urban), AP – 520008
                  </p>
                </div>

                <div className="border border-neutral-800/80 bg-neutral-900/60 p-6 rounded-xl">
                  <div className="text-orange-400 text-xl mb-3">📞</div>
                  <h4 className="text-white font-semibold text-base mb-2">Direct Phone & WhatsApp</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    Available during corporate working hours (10:00 AM – 7:00 PM).
                  </p>
                  <a
                    href="tel:+919985301213"
                    className="text-orange-400 font-semibold text-sm hover:underline block"
                  >
                    +91 99853 01213
                  </a>
                </div>

                <div className="border border-neutral-800/80 bg-neutral-900/60 p-6 rounded-xl">
                  <div className="text-orange-400 text-xl mb-3">✉️</div>
                  <h4 className="text-white font-semibold text-base mb-2">Email Desk</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    For filings, documentation, and notice reviews:
                  </p>
                  <a
                    href="mailto:info@taxedgefinsolutions.com"
                    className="text-orange-400 font-semibold text-sm hover:underline block truncate"
                  >
                    info@taxedgefinsolutions.com
                  </a>
                </div>

                <div className="border border-neutral-800/80 bg-neutral-900/60 p-6 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-orange-400 text-xl mb-3">⚡</div>
                    <h4 className="text-white font-semibold text-base mb-2">Fast WhatsApp Response</h4>
                    <p className="text-neutral-400 text-sm">
                      Connect instantly with our team regarding notices or compliance deadlines.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919985301213"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-orange-400 border border-neutral-700 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="border-t border-neutral-800/80 py-8 px-4 sm:px-8 text-neutral-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Tax Edge Fin Solutions LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Vijayawada • Guntur • Andhra Pradesh</span>
          </div>
        </div>
      </footer>
    </div>
  );
}