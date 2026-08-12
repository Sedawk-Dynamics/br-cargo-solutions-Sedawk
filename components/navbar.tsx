'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { servicesList } from '@/data/services-data'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact Us', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top bar (Collapses when scrolling so only main nav stays fixed at top) */}
      <div
        className={`bg-[#091e3e] text-white text-sm hidden md:block border-b border-white/10 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 py-0 border-none' : 'max-h-12 opacity-100 py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919999879337" className="flex items-center gap-2 hover:text-[#F97316] transition-colors">
              <Phone size={13} className="text-[#F97316]" />
              <span>+91 9999879337</span>
            </a>
            <a href="mailto:info@brcargosolutions.com" className="flex items-center gap-2 hover:text-[#F97316] transition-colors">
              <Mail size={13} className="text-[#F97316]" />
              <span>info@brcargosolutions.com</span>
            </a>
          </div>
          <span className="text-white/70 text-xs tracking-wide">Mon – Sat: 9:00 AM – 7:00 PM IST</span>
        </div>
      </div>

      {/* Main nav (Sticks at top when scrolling with distinct look) */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F2C59]/95 backdrop-blur-md shadow-xl shadow-[#091e3e]/50 border-b border-[#F97316]/40 py-2.5'
            : 'bg-[#0F2C59] border-b border-white/10 shadow-md py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/br-cargo-logo.jpeg"
              alt="BR Cargo Solutions Pvt. Ltd."
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-lg object-contain bg-white p-1 shadow-sm group-hover:scale-105 transition-transform"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-white font-extrabold text-base tracking-wide uppercase">
                BR Cargo Solutions
              </p>
              <p className="text-[#F97316] text-xs font-semibold tracking-widest uppercase">
                Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              if (link.label === 'Services') {
                return (
                  <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href="/#services"
                        className="text-white/85 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/15 hover:underline decoration-[#F97316] underline-offset-4 transition-all inline-flex items-center gap-1.5"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            desktopServicesOpen ? 'rotate-180 text-[#F97316]' : 'text-white/70'
                          }`}
                        />
                      </Link>
                    </div>

                    {/* Minimal Dropdown Accordion */}
                    {desktopServicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50">
                        <div className="bg-[#091e3e] border border-white/15 rounded-xl shadow-2xl py-2">
                          <div className="flex flex-col">
                            {servicesList.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={() => setDesktopServicesOpen(false)}
                                className="px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 hover:underline decoration-[#F97316] underline-offset-2 transition-colors border-b border-white/5 last:border-none"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/85 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/15 transition-all block"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#quote"
              className="bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow-md shadow-[#F97316]/30 hover:shadow-lg hover:shadow-[#F97316]/40"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden bg-[#091e3e] border-t border-white/10 px-6 py-4 flex flex-col gap-1 mt-2 shadow-2xl">
            {navLinks.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div key={link.label} className="flex flex-col">
                    <div className="flex items-center justify-between py-2.5 px-3 rounded-md hover:bg-white/10 text-white/85 hover:text-white text-sm font-medium">
                      <Link
                        href="/#services"
                        onClick={() => setOpen(false)}
                        className="hover:underline decoration-[#F97316] underline-offset-4"
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1 text-white/70 hover:text-white"
                        aria-label="Toggle Services accordion"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? 'rotate-180 text-[#F97316]' : ''
                          }`}
                        />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <div className="pl-4 border-l-2 border-[#F97316]/40 my-1 flex flex-col gap-1">
                        {servicesList.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => {
                              setOpen(false)
                              setMobileServicesOpen(false)
                            }}
                            className="text-white/70 hover:text-white hover:underline text-xs py-1.5 px-2 block transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/85 hover:text-white font-medium py-2.5 px-3 rounded-md hover:bg-white/10 transition-all text-sm"
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold text-center py-2.5 rounded-md text-sm transition-colors shadow-md"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}