'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { servicesData, servicesList } from '@/data/services-data'
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Award,
} from 'lucide-react'

export default function DynamicServicePage() {
  const params = useParams()
  const rawSlug = params?.slug as string
  const slug = rawSlug && servicesData[rawSlug] ? rawSlug : 'air-freight'
  const service = servicesData[slug]

  const IconComponent = service.icon

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Main Content Section */}
      <section className="pt-28 pb-20 md:pt-36 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Left Main Content (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full">
              {/* Main Service Feature Image & Title Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-96 md:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-slate-100 group flex-shrink-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
                    {service.title}
                  </h1>
                  <p className="text-white/80 text-sm md:text-base font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </motion.div>

              {/* Service Detailed Overview Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0F2C59] mb-2 flex items-center gap-3">
                    <div className="p-2 bg-[#F97316]/10 rounded-xl">
                      <IconComponent className="text-[#F97316]" size={22} />
                    </div>
                    Service Overview
                  </h2>
                  <p className="text-[#64748B] text-xs md:text-sm leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* Key Capabilities & Features */}
                <div className="border-t border-[#E2E8F0] pt-4">
                  <h3 className="text-sm font-bold text-[#0F2C59] mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-[#F97316]" size={16} />
                    Key Capabilities & Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]"
                      >
                        <CheckCircle size={15} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0F2C59] text-xs font-semibold leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="border-t border-[#E2E8F0] pt-4">
                  <h3 className="text-sm font-bold text-[#0F2C59] mb-2 flex items-center gap-2">
                    <Award className="text-[#F97316]" size={16} />
                    Why Choose Our {service.title}?
                  </h3>
                  <div className="grid gap-2 mb-4">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs text-[#64748B] font-medium bg-[#F8FAFC] px-3 py-2 rounded-lg border border-[#E2E8F0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Left-aligned Request a Quote Button */}
                  <div>
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-xs shadow-md"
                    >
                      Request a Quote <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar (1 col) */}
            <div className="flex flex-col gap-6 h-full">
              {/* All Freight Services List */}
              <div className="hidden lg:block bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex-shrink-0">
                <h3 className="text-lg font-bold text-[#0F2C59] mb-4 pb-3 border-b border-[#E2E8F0]">
                  All Freight Services
                </h3>
                <div className="flex flex-col gap-2">
                  {servicesList.map((item) => {
                    const isActive = item.slug === service.slug
                    return (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-[#F97316] text-white shadow-md shadow-[#F97316]/20'
                            : 'bg-[#F8FAFC] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight size={16} className={isActive ? 'text-white' : 'opacity-40'} />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Step-by-Step Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0F2C59] mb-1">
                    Our Step-by-Step Process
                  </h3>
                  <p className="text-[#64748B] text-xs mb-5">
                    How we manage your cargo from origin pickup to doorstep delivery.
                  </p>
                  <div className="flex flex-col gap-3.5">
                    {service.process.map((p) => (
                      <div
                        key={p.step}
                        className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex flex-col gap-1 hover:border-[#F97316]/40 hover:shadow-sm transition-all group"
                      >
                        <span className="text-[#F97316] text-[10px] font-extrabold tracking-widest uppercase bg-[#F97316]/10 w-fit px-2.5 py-0.5 rounded-full">
                          Step {p.step}
                        </span>
                        <h4 className="text-[#0F2C59] font-bold text-sm mt-0.5 group-hover:text-[#F97316] transition-colors">
                          {p.title}
                        </h4>
                        <p className="text-[#64748B] text-xs leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
