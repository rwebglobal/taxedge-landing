'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-100 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">TaxEdge Fin Solutions</h1>
            <p className="text-sm text-gray-600">Expert Financial Advisory</p>
          </div>
          <a href="tel:+919985301213" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">
            📞 +91 99853 01213
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Integrated Business Advisory</h2>
          <p className="text-2xl text-blue-100 mb-4">Tax · Finance · Legal · Compliance</p>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Expert financial advisory for startups, SMEs & businesses in Vijayawada, Guntur & Andhra Pradesh.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919985301213" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
              📞 Call: +91 99853 01213
            </a>
            <a href="https://wa.me/919985301213" target="_blank" className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 my-8">
          <p className="text-yellow-800"><strong>⚠️ We're temporarily unavailable.</strong> Regular operations resume shortly.</p>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'GST Filing & Compliance',
              'Income Tax Planning',
              'Accounting & Bookkeeping',
              'Business Loans & Finance',
              'Startup Registration',
              'Corporate Legal Support'
            ].map((service) => (
              <div key={service} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex gap-4 items-start">
                <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                <h4 className="font-bold text-lg text-gray-900">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                📞
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Call Us</h4>
              <a href="tel:+919985301213" className="text-blue-600 hover:underline">
                +91 99853 01213
              </a>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ✉️
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Email Us</h4>
              <a href="mailto:info@taxedgefinsolutions.com" className="text-blue-600 hover:underline">
                info@taxedgefinsolutions.com
              </a>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                📍
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-700">Vijayawada, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Tax Edge Fin Solutions. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Emergency Website | Temporary Landing Page</p>
        </div>
      </footer>
    </div>
  )
}