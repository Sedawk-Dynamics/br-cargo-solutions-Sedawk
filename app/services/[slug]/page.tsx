'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { servicesData, servicesList } from '@/data/services-data'
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
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

      {/* Hero Header Banner */}
      <section className="bg-[#0F2C59] pt-36 pb-20 text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 75% 20%, #60a5fa 0%, transparent 45%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white/70 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-[#F97316] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/50">Services</span>
            <span>/</span>
            <span className="text-[#F97316]">{service.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-balance mb-4">
            {service.title}
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Main Service Content */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Main Content (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Image banner */}
              <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm">
                <h2 className="text-2xl font-bold text-[#0F2C59] mb-4 flex items-center gap-3">
                  <IconComponent className="text-[#F97316]" size={28} />
                  Service Overview
                </h2>
                <p className="text-[#64748B] text-base leading-relaxed mb-6">
                  {service.overview}
                </p>

                {/* Key Features list */}
                <h3 className="text-lg font-bold text-[#0F2C59] mb-4">
                  Key Capabilities & Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <CheckCircle size={18} className="text-[#F97316] flex-shrink-0 mt-1" />
                      <span className="text-[#0F2C59] text-sm font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Benefits */}
                <h3 className="text-lg font-bold text-[#0F2C59] mb-3">
                  Why Choose Our {service.title}?
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process steps */}
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm">
                <h2 className="text-2xl font-bold text-[#0F2C59] mb-6">
                  Our Step-by-Step Process
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.process.map((p) => (
                    <div key={p.step} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col gap-2">
                      <span className="text-[#F97316] text-sm font-black tracking-wider uppercase">
                        Step {p.step}
                      </span>
                      <h4 className="text-[#0F2C59] font-bold text-base">
                        {p.title}
                      </h4>
                      <p className="text-[#64748B] text-xs leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (1 col) */}
            <div className="flex flex-col gap-8 sticky top-28">
              {/* All Services Navigation List */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h3 className="text-lg font-bold text-[#0F2C59] mb-4 pb-3 border-b border-[#E2E8F0]">
                  All Freight Services
                </h3>
                <div className="flex flex-col gap-1.5">
                  {servicesList.map((item) => {
                    const isActive = item.slug === service.slug
                    return (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-[#F97316] text-white shadow-md'
                            : 'bg-[#F8FAFC] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight size={16} className={isActive ? 'text-white' : 'opacity-50'} />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Quick Contact CTA Card */}
              <div className="bg-[#0F2C59] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div aria-hidden className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#F97316]/20 rounded-full" />
                <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Speak directly with our freight experts for customized rate quotes and scheduling.
                </p>
                <div className="flex flex-col gap-3 mb-6">
                  <a href="tel:+919999879337" className="flex items-center gap-3 text-sm font-semibold hover:text-[#F97316] transition-colors">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Phone size={16} className="text-[#F97316]" />
                    </div>
                    <span>+91 9999879337</span>
                  </a>
                  <a href="mailto:info@brcargo.co.in" className="flex items-center gap-3 text-sm font-semibold hover:text-[#F97316] transition-colors">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Mail size={16} className="text-[#F97316]" />
                    </div>
                    <span>info@brcargo.co.in</span>
                  </a>
                </div>
                <a
                  href="#quote"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md"
                >
                  Request a Quote <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
