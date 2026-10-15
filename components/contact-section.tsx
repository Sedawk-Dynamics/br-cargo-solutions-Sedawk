'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react'
import { phoneNumbers, officeLocation } from '@/lib/site-config'

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
    lines: phoneNumbers.map((p) => p.display),
    hrefs: phoneNumbers.map((p) => p.href),
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@brcargosolutions.com', 'sales@brcargosolutions.com', 'ops@brcargosolutions.com'],
    href: 'mailto:info@brcargosolutions.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Monday – Saturday', '9:00 AM – 7:00 PM IST'],
  },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  // Opens the visitor's email app with the enquiry pre-filled
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Quote request – ${f.get('cargo') || 'General enquiry'}`
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone') || '-'}`,
      `Service: ${f.get('cargo') || '-'}`,
      '',
      String(f.get('message')),
    ].join('\n')
    window.location.href = `mailto:info@brcargosolutions.com?cc=sales@brcargosolutions.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
                    c.hrefs?.[i] || (c.href && i === 0) ? (
                      <a
                        key={line}
                        href={c.hrefs?.[i] ?? c.href}
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
            id="quote"
            className="lg:col-span-3 h-full scroll-mt-28"
          >
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-[#0F2C59] font-bold text-xl mb-6">
                  Request a Quote
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Email</span>
                      <input
                        type="email"
                        name="email"
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
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Cargo Type</span>
                      <select
                        name="cargo"
                        className="border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F2C59] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] bg-white"
                      >
                        <option value="">Select cargo type</option>
                        <option>Air Shipment</option>
                        <option>Ocean Shipment (FCL)</option>
                        <option>Ocean Shipment (LCL)</option>
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
                      name="message"
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
                      'Opening your email app…'
                    ) : (
                      <>
                        Send Quote Request <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live location: map (left) + visit info (right) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm"
        >
          <iframe
            src={officeLocation.embedUrl}
            title="BR Cargo Solutions live location"
            className="w-full h-72 lg:h-full lg:min-h-[340px] border-0 block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="p-6 md:p-8 flex flex-col justify-center gap-5">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold text-xs uppercase tracking-widest mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F97316]" />
                </span>
                Our Live Location
              </span>
              <h3 className="text-[#0F2C59] font-extrabold text-xl md:text-2xl">Visit Our Office</h3>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#0F2C59]/8 p-2.5 rounded-lg flex-shrink-0">
                <MapPin size={18} className="text-[#0F2C59]" />
              </div>
              <div>
                <p className="text-[#0F2C59] font-bold text-sm">BR Cargo Solutions Pvt. Ltd.</p>
                <p className="text-[#64748B] text-sm leading-relaxed">{officeLocation.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#0F2C59]/8 p-2.5 rounded-lg flex-shrink-0">
                <Phone size={18} className="text-[#0F2C59]" />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1.5">
                {phoneNumbers.map((p) => (
                  <a key={p.href} href={p.href} className="text-[#0F2C59] font-semibold text-sm hover:text-[#F97316] transition-colors">
                    {p.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#0F2C59]/8 p-2.5 rounded-lg flex-shrink-0">
                <Clock size={18} className="text-[#0F2C59]" />
              </div>
              <p className="text-[#64748B] text-sm pt-1.5">
                <span className="text-[#0F2C59] font-semibold">Mon – Sat:</span> 9:00 AM – 7:00 PM IST
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E2E8F0]">
              <a
                href={officeLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-md shadow-[#F97316]/20"
              >
                <MapPin size={15} /> Get Directions
              </a>
              <a
                href={phoneNumbers[0].href}
                className="inline-flex items-center gap-2 bg-[#0F2C59] hover:bg-[#091e3e] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
