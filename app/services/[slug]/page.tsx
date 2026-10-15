'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import {
  servicesData,
  servicesList,
  whyChooseUs,
  companyHighlights,
} from '@/data/services-data'
import { phoneNumbers } from '@/lib/site-config'
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Award,
  Phone,
  Mail,
  Headset,
  BadgeCheck,
} from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function DynamicServicePage() {
  const params = useParams()
  const rawSlug = params?.slug as string
  const slug = rawSlug && servicesData[rawSlug] ? rawSlug : 'air-freight'
  const service = servicesData[slug]

  const IconComponent = service.icon
  const primaryPhone = phoneNumbers[0]
  const enquiryMail = `mailto:info@brcargosolutions.com?subject=${encodeURIComponent(
    `Enquiry – ${service.title}`
  )}`

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Main Content Section */}
      <section className="pt-28 pb-16 md:pt-40 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#64748B] mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F97316]">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#services" className="hover:text-[#F97316]">Services</Link>
            <ChevronRight size={12} />
            <span className="text-[#0F2C59] font-semibold">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Main Content (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Feature image, title & primary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-96 md:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-slate-100 group"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#F97316] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                    <IconComponent size={13} /> {service.tag}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-1">
                    {service.title}
                  </h1>
                  <p className="text-white/80 text-sm md:text-base font-medium mb-5 max-w-2xl">
                    {service.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/#quote"
                      className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-[#F97316]/30"
                    >
                      Get a Free Quote <ArrowRight size={15} />
                    </Link>
                    <a
                      href={primaryPhone.href}
                      className="inline-flex items-center gap-2 bg-white/15 hover:bg-white hover:text-[#0F2C59] backdrop-blur-sm border border-white/30 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
                    >
                      <Phone size={15} /> Call Now
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Overview */}
              <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold text-[#0F2C59] mb-4 flex items-center gap-3">
                  <span className="p-2 bg-[#F97316]/10 rounded-xl">
                    <IconComponent className="text-[#F97316]" size={22} />
                  </span>
                  Service Overview
                </h2>
                <div className="space-y-3">
                  {service.overview.map((para) => (
                    <p key={para} className="text-[#475569] text-sm md:text-[15px] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Services include */}
              <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm">
                <h3 className="text-lg font-bold text-[#0F2C59] mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-[#F97316]" size={18} />
                  {service.featuresHeading}
                </h3>

                {service.featureGroups ? (
                  <div className="grid md:grid-cols-3 gap-4">
                    {service.featureGroups.map((group) => (
                      <div key={group.title} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                        <p className="text-[#0F2C59] font-extrabold text-sm uppercase tracking-wide mb-3 pb-2 border-b-2 border-[#F97316]/60">
                          {group.title}
                        </p>
                        <ul className="space-y-2">
                          {group.items.map((it) => (
                            <li key={it} className="flex items-start gap-2 text-[#0F2C59] text-xs font-semibold leading-snug">
                              <CheckCircle size={14} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0] hover:border-[#F97316]/40 transition-colors"
                      >
                        <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0F2C59] text-sm font-semibold leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Why choose us */}
              <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm">
                <h3 className="text-lg font-bold text-[#0F2C59] mb-4 flex items-center gap-2">
                  <Award className="text-[#F97316]" size={18} />
                  Why Choose B R Cargo Solutions?
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mb-5">
                  {whyChooseUs.map((w) => (
                    <div key={w.title} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                      <p className="text-[#0F2C59] font-bold text-sm mb-1.5">{w.title}</p>
                      <p className="text-[#64748B] text-xs leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {companyHighlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 bg-[#0F2C59]/5 text-[#0F2C59] text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      <BadgeCheck size={13} className="text-[#F97316]" /> {h}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-5 border-t border-[#E2E8F0]">
                  <Link
                    href="/#quote"
                    className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm shadow-md"
                  >
                    Request a Quote <ArrowRight size={15} />
                  </Link>
                  <a
                    href={primaryPhone.href}
                    className="inline-flex items-center gap-2 bg-[#0F2C59] hover:bg-[#091e3e] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Phone size={15} /> {primaryPhone.display}
                  </a>
                  <a
                    href={enquiryMail}
                    className="inline-flex items-center gap-2 border border-[#0F2C59]/20 hover:border-[#F97316] hover:text-[#F97316] text-[#0F2C59] font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Mail size={15} /> Email Us
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar (1 col) */}
            <aside className="flex flex-col gap-6">
              {/* All services */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h3 className="text-lg font-bold text-[#0F2C59] mb-4 pb-3 border-b border-[#E2E8F0]">
                  All Services
                </h3>
                <div className="flex flex-col gap-2">
                  {servicesList.map((item) => {
                    const isActive = item.slug === service.slug
                    return (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-[#F97316] text-white shadow-md shadow-[#F97316]/20'
                            : 'bg-[#F8FAFC] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight size={16} className={`flex-shrink-0 ${isActive ? 'text-white' : 'opacity-40'}`} />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Talk to an expert */}
              <div className="bg-[#0F2C59] text-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div aria-hidden className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#F97316]/20" />
                <Headset className="text-[#F97316] mb-3 relative" size={28} />
                <h3 className="text-lg font-bold mb-1 relative">Need help with your shipment?</h3>
                <p className="text-white/70 text-xs mb-4 relative">
                  Speak directly with our logistics team, Mon – Sat, 9:00 AM – 7:00 PM IST.
                </p>
                <div className="flex flex-col gap-2 mb-4 relative">
                  {phoneNumbers.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors"
                    >
                      <Phone size={15} className="text-[#F97316]" /> {p.display}
                    </a>
                  ))}
                  <a
                    href={enquiryMail}
                    className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors break-all"
                  >
                    <Mail size={15} className="text-[#F97316] flex-shrink-0" /> info@brcargosolutions.com
                  </a>
                </div>
                <Link
                  href="/#quote"
                  className="relative flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
                >
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>

              {/* Process */}
              <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h3 className="text-lg font-bold text-[#0F2C59] mb-1">Our Step-by-Step Process</h3>
                <p className="text-[#64748B] text-xs mb-5">
                  How we manage your requirement from start to finish.
                </p>
                <div className="flex flex-col gap-3">
                  {service.process.map((p) => (
                    <div
                      key={p.step}
                      className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex flex-col gap-1 hover:border-[#F97316]/40 transition-all group"
                    >
                      <span className="text-[#F97316] text-[10px] font-extrabold tracking-widest uppercase bg-[#F97316]/10 w-fit px-2.5 py-0.5 rounded-full">
                        Step {p.step}
                      </span>
                      <h4 className="text-[#0F2C59] font-bold text-sm mt-0.5 group-hover:text-[#F97316] transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-[#64748B] text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="pb-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            className="bg-gradient-to-r from-[#0F2C59] to-[#091e3e] rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl"
          >
            <div>
              <h2 className="text-white text-xl md:text-2xl font-extrabold mb-1">
                Ready to get started with {service.title}?
              </h2>
              <p className="text-white/70 text-sm">
                Share your requirement and our team will get back to you with the best solution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow-lg shadow-[#F97316]/30"
              >
                Get a Free Quote <ArrowRight size={15} />
              </Link>
              <a
                href={primaryPhone.href}
                className="inline-flex items-center gap-2 bg-white text-[#0F2C59] hover:bg-white/90 font-bold px-6 py-3 rounded-lg text-sm transition-colors"
              >
                <Phone size={15} /> Call {primaryPhone.display}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
