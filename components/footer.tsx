import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, FileCheck } from 'lucide-react'

const services = [
  'International Air Freight',
  'Global Ocean Freight',
  'Multimodal Transport',
  'Customs Clearance',
  'DGFT Documentation',
  'Door-to-Door Logistics',
  'Warehousing & Distribution',
  'Road Container Movement',
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Track & Quote', href: '/#quote' },
  { label: 'Contact Us', href: '/#contact' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#091e3e] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/br-cargo-logo.jpeg"
                alt="BR Cargo Solutions Pvt. Ltd."
                width={56}
                height={56}
                className="rounded-md bg-white p-1 object-contain"
              />
              <div>
                <p className="font-bold text-sm leading-tight tracking-wide uppercase">
                  BR Cargo Solutions
                </p>
                <p className="text-[#F97316] text-xs font-semibold tracking-widest uppercase">
                  Pvt. Ltd.
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premier international logistics partner specializing in seamless
              cross-border freight management by air, sea, and land.
            </p>
            {/* Social media icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="bg-white/8 hover:bg-[#F97316] text-white/70 hover:text-white p-2.5 rounded-lg transition-all transform hover:-translate-y-0.5"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5 border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#F97316] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F97316]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5 border-b border-white/10 pb-3">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-[#F97316] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F97316]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5 border-b border-white/10 pb-3">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">
                  H. No. RZ C-61, F/F Kh No.115/11, Mahavir Enclave, South West
                  Delhi, New Delhi – 110045
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F97316] flex-shrink-0" />
                <a
                  href="tel:+919999879337"
                  className="text-white/60 hover:text-[#F97316] text-sm transition-colors"
                >
                  +91 9999879337
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F97316] flex-shrink-0" />
                <a
                  href="mailto:info@brcargosolutions.com"
                  className="text-white/60 hover:text-[#F97316] text-sm transition-colors"
                >
                  info@brcargosolutions.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FileCheck size={16} className="text-[#F97316] flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-xs mb-0.5">GSTIN</p>
                  <p className="text-white/60 text-sm font-mono tracking-wide">
                    07AAOCB7231M1Z9
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} BR Cargo Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/40 text-xs text-center">
            Domain:{' '}
            <a
              href="https://brcargosolutions.com"
              className="hover:text-[#F97316] transition-colors"
            >
              brcargosolutions.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
