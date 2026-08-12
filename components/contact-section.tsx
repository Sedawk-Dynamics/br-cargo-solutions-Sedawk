'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Our Office',
    lines: [
      'H. No. RZ C-61, F/F Kh No.115/11,',
      'Mahavir Enclave, South West Delhi,',
      'New Delhi – 110045',
    ],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 9999879337'],
    href: 'tel:+919999879337',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@brcargo.co.in', 'sales@brcargo.co.in', 'ops@brcargo.co.in'],
    href: 'mailto:info@brcargo.co.in',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Monday – Saturday', '9:00 AM – 7:00 PM IST'],
  },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C59] text-balance">
            Let&apos;s Move Your Cargo{' '}
            <span className="text-[#F97316]">Forward</span>
          </h2>
          <p className="mt-4 text-[#64748B] text-lg max-w-xl mx-auto">
            Reach out to our team for quotes, inquiries, or to start planning
            your next shipment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Contact info - Left column (4 cards perfectly aligned to right form height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col justify-between gap-4 h-full"
          >
            {contactDetails.map((c) => (
              <div
                key={c.label}
                className="flex-1 bg-white border border-[#E2E8F0] rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:border-[#F97316]/40 hover:shadow-md transition-all"
              >
                <div className="bg-[#0F2C59]/8 p-3 rounded-xl flex-shrink-0">
                  <c.icon size={22} className="text-[#0F2C59]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#0F2C59] font-bold text-sm mb-1">
                    {c.label}
                  </p>
                  {c.lines.map((line, i) =>
                    c.href && i === 0 ? (
                      <a
                        key={line}
                        href={c.href}
                        className="block text-[#64748B] text-sm hover:text-[#F97316] transition-colors leading-snug truncate"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-[#64748B] text-sm leading-snug">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact form - Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 h-full"
          >
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-[#0F2C59] font-bold text-xl mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Name</span>
                      <input
                        type="text"
                        placeholder="Your full name"
                        required
                        className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Email</span>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                      />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Phone</span>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Cargo Type</span>
                      <select
                        className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] bg-white"
                      >
                        <option value="">Select cargo type</option>
                        <option>Air Freight</option>
                        <option>Ocean Freight (FCL)</option>
                        <option>Ocean Freight (LCL)</option>
                        <option>Road Transport</option>
                        <option>Customs Clearance</option>
                        <option>Warehousing</option>
                        <option>DGFT / Documentation</option>
                      </select>
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Message</span>
                    <textarea
                      rows={4}
                      placeholder="Describe your shipment requirements..."
                      required
                      className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] resize-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="self-start inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm shadow-md shadow-[#F97316]/20"
                  >
                    {submitted ? (
                      'Message Sent!'
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 p-5 rounded-2xl overflow-hidden border border-[#E2E8F0] h-50 bg-[#E2E8F0] flex items-center justify-center"
        >
          <a
            href="https://maps.google.com/?q=Mahavir+Enclave+South+West+Delhi+110045"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-[#64748B] hover:text-[#0F2C59] transition-colors"
          >
            <MapPin size={32} className="text-[#F97316]" />
            <p className="font-semibold text-sm">Mahavir Enclave, South West Delhi – 110045</p>
            <span className="inline-flex items-center gap-1 text-xs text-[#F97316] font-semibold">
              View on Google Maps <ArrowRight size={12} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

