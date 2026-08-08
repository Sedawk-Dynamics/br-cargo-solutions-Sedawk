'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Weight, Phone, Search, Package } from 'lucide-react'

type TabId = 'quote' | 'track'

const tabs: { id: TabId; label: string }[] = [
  { id: 'quote', label: 'Get Instant Rate Quote' },
  { id: 'track', label: 'Track Shipment' },
]

export default function QuoteStrip() {
  const [active, setActive] = useState<TabId>('quote')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section id="quote" className="py-20 bg-[#0F2C59] relative overflow-hidden">
      {/* Decorative */}
      <div aria-hidden className="absolute right-0 top-0 w-96 h-96 bg-[#F97316]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div aria-hidden className="absolute left-0 bottom-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-balance">
            Start Your Shipment Today
          </h2>
          <p className="text-white/60 mt-3 text-base">
            Get an instant quote or track your cargo in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 ring-1 ring-[#F97316]/30"
        >
          {/* Tab buttons */}
          <div className="flex border-b border-[#E2E8F0]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                  active === tab.id
                    ? 'bg-[#0F2C59] text-white'
                    : 'text-[#64748B] hover:text-[#0F2C59] hover:bg-[#F8FAFC]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form area */}
          <div className="p-8">
            {active === 'quote' ? (
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide flex items-center gap-1.5">
                      <MapPin size={13} /> Origin
                    </span>
                    <input
                      type="text"
                      placeholder="City / Country"
                      required
                      className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide flex items-center gap-1.5">
                      <MapPin size={13} /> Destination
                    </span>
                    <input
                      type="text"
                      placeholder="City / Country"
                      required
                      className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide flex items-center gap-1.5">
                      <Weight size={13} /> Cargo Weight
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. 500 kg"
                      required
                      className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide flex items-center gap-1.5">
                      <Phone size={13} /> Contact Number
                    </span>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm"
                >
                  {submitted ? 'Request Sent!' : 'Request Quote'}
                  {!submitted && <ArrowRight size={16} />}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                  <label className="flex flex-col gap-1.5 flex-1">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide flex items-center gap-1.5">
                      <Package size={13} /> Shipment / AWB Number
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your tracking number"
                      required
                      className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 sm:w-60">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide flex items-center gap-1.5">
                      <Phone size={13} /> Contact Number
                    </span>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F2C59] hover:bg-[#1a3d7a] text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm"
                >
                  {submitted ? 'Request Sent!' : 'Track Shipment'}
                  {!submitted && <Search size={16} />}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        <p className="text-center text-white/50 text-sm mt-6">
          Our team will respond within 2 business hours. You can also reach us at{' '}
          <a href="tel:+919999879337" className="text-[#F97316] hover:underline">+91 9999879337</a>.
        </p>
      </div>
    </section>
  )
}
