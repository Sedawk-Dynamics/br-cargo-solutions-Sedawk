import Image from 'next/image'
import { Phone, Mail, MapPin, Plane, Ship, Truck, FileCheck, Globe } from 'lucide-react'

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
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Track & Quote', href: '#quote' },
  { label: 'Contact Us', href: '#contact' },
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
            {/* Transport icons strip */}
            <div className="flex items-center gap-3">
              {[Plane, Ship, Truck, Globe].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-white/8 hover:bg-[#F97316]/20 p-2 rounded-lg transition-colors"
                >
                  <Icon size={16} className="text-white/70" />
                </div>
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
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#F97316] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F97316]" />
                    {link.label}
                  </a>
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
                  <a
                    href="#services"
                    className="text-white/60 hover:text-[#F97316] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F97316]" />
                    {s}
                  </a>
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
                  href="mailto:info@brcargo.co.in"
                  className="text-white/60 hover:text-[#F97316] text-sm transition-colors"
                >
                  info@brcargo.co.in
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
              href="https://brcargo.co.in"
              className="hover:text-[#F97316] transition-colors"
            >
              brcargo.co.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
