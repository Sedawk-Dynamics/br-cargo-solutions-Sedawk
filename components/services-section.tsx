'use client'

import { motion } from 'framer-motion'
import { Plane, Ship, Truck, FileCheck, PackageCheck, Globe, Warehouse, ClipboardList } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Global Air Freight',
    desc: 'High-speed, time-definite air cargo services for urgent, high-value, or perishable goods connecting major hubs worldwide.',
    tag: 'Air',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Ship,
    title: 'Global Ocean Freight',
    desc: 'Full Container Load (FCL) and Less than Container Load (LCL) shipping options across all major global sea routes.',
    tag: 'Ocean',
    tagColor: 'bg-[#0F2C59]/10 text-[#0F2C59]',
  },
  {
    icon: Globe,
    title: 'Multimodal Transport',
    desc: 'Combining sea, air, and land networks to create the most efficient, cost-effective routing from country to country.',
    tag: 'Multimodal',
    tagColor: 'bg-teal-100 text-teal-700',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance & Compliance',
    desc: 'Complete management of complex international customs paperwork, duty structures, tariff classifications, and regulatory compliance.',
    tag: 'Customs',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    icon: PackageCheck,
    title: 'Door-to-Door Logistics',
    desc: 'A fully managed single-source solution taking cargo directly from the factory floor in the origin country to the buyer\'s doorstep.',
    tag: 'Supply Chain',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    desc: 'Secure global storage and consolidation hubs equipped for inventory management and efficient cross-docking before final distribution.',
    tag: 'Warehouse',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    icon: ClipboardList,
    title: 'DGFT & Export Documentation',
    desc: 'Expert handling of DGFT services, import/export licensing, duty drawback, and all regulatory export documentation requirements.',
    tag: 'Documentation',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Truck,
    title: 'Road Container Movement',
    desc: 'Own fleet providing reliable inland container movement, last-mile delivery, and cross-border road freight between countries.',
    tag: 'Road',
    tagColor: 'bg-amber-100 text-amber-700',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: 'easeOut' as const },
  }),
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C59] text-balance">
            Comprehensive Freight &{' '}
            <span className="text-[#F97316]">Logistics Solutions</span>
          </h2>
          <p className="mt-4 text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            From first-mile pickup to final-mile delivery, we provide complete
            logistics coverage — every mode, every route, every regulation.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="bg-[#0F2C59]/8 group-hover:bg-[#F97316]/12 p-3 rounded-xl inline-flex mb-4 transition-colors w-fit">
                <s.icon size={24} className="text-[#0F2C59] group-hover:text-[#F97316] transition-colors" />
              </div>

              {/* Tag */}
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 ${s.tagColor}`}>
                {s.tag}
              </span>

              <h3 className="text-[#0F2C59] font-bold text-base mb-2">
                {s.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
