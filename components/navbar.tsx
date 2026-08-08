'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Track & Quote', href: '#quote' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
            <a href="mailto:info@brcargo.co.in" className="flex items-center gap-2 hover:text-[#F97316] transition-colors">
              <Mail size={13} className="text-[#F97316]" />
              <span>info@brcargo.co.in</span>
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
          <Link href="#home" className="flex items-center gap-3 group">
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/85 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/15 transition-all block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#quote"
              className="bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow-md shadow-[#F97316]/30 hover:shadow-lg hover:shadow-[#F97316]/40"
            >
              Get a Quote
            </a>
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-white font-medium py-2.5 px-3 rounded-md hover:bg-white/10 transition-all text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold text-center py-2.5 rounded-md text-sm transition-colors shadow-md"
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}