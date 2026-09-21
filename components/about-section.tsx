'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye, ShieldCheck, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To simplify global logistics through reliable service, innovative solutions, and a commitment to excellence — enabling our clients to focus on growing their business.',
    accent: '#F97316',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To become a trusted logistics partner recognized for reliability, transparency, and customer satisfaction across domestic and international markets.',
    accent: '#0F2C59',
  },
  {
    icon: ShieldCheck,
    title: 'In-House Operations',
    desc: 'Complete management under one roof — freight forwarding, customs clearance, DGFT documentation, and transportation — no third-party handoffs, single-source accountability.',
    accent: '#F97316',
  },
]

const usps = [
  'End-to-end supply chain under one roof',
  'Fleet Owner & Transport Contractor',
  'Expert customs & DGFT documentation',
  'Transparent, real-time shipment updates',
  'Dedicated account management team',
  'ISO certified & compliant with international trade regulations',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C59] text-balance">
            Single-Source Accountability from{' '}
            <span className="text-[#F97316]">Origin to Destination</span>
          </h2>
          <p className="mt-4 text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            We handle it all, end to end. From freight forwarding and customs
            clearance to transportation and DGFT documentation — our in-house
            team manages every stage of your shipment under one roof.
          </p>
        </motion.div>

        {/* 3 Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-lg transition-shadow group"
            >
              <div
                className="inline-flex p-3 rounded-xl mb-5"
                style={{ backgroundColor: `${f.accent}15` }}
              >
                <f.icon size={26} style={{ color: f.accent }} />
              </div>
              <h3 className="text-[#0F2C59] font-bold text-lg mb-3">
                {f.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Two-column: about text + USPs */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1"
          >
            <div className="relative pl-6 border-l-4 border-[#F97316]">
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-4">
                About BR Cargo Solutions
              </h3>
              <p className="text-[#64748B] leading-relaxed mb-4">
                Our journey began with a simple vision — to provide reliable,
                transparent, and customer-focused logistics solutions that
                businesses can depend on. Every shipment represents more than
                cargo; it represents commitments, opportunities, and the trust
                our clients place in us.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-4">
                As global trade continues to evolve, we remain committed to
                delivering seamless freight forwarding and transportation
                services with the highest standards of professionalism,
                integrity, and operational excellence.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                At BR Cargo Solutions Pvt. Ltd., we don&apos;t just move cargo
                — we create reliable logistics partnerships that support growth
                and success.
              </p>
            </div>
          </motion.div>

          {/* USP checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl p-8 text-white overflow-hidden shadow-xl border border-slate-800">
              {/* Background Image */}
              <Image
                src="/what-sets-us-apart.png"
                alt="What Sets Us Apart"
                fill
                priority
                className="object-cover pointer-events-none"
              />
              {/* Dark tint overlay (no blue) */}
              <div className="absolute inset-0 bg-black/65" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  {usps.map((usp) => (
                    <li key={usp} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-[#F97316] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-white font-medium text-sm leading-relaxed">
                        {usp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

