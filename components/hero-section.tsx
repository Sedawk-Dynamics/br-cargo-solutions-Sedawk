'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Plane, Ship, Truck, ArrowRight } from 'lucide-react'

const transportModes = [
  {
    icon: Plane,
    title: 'Air Freight',
    desc: 'Time-critical cargo, worldwide hubs',
    color: 'from-blue-600 to-blue-800',
    href: '/services/air-freight',
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    desc: 'FCL & LCL across all sea routes',
    color: 'from-[#0F2C59] to-[#1a3d7a]',
    href: '/services/ocean-freight',
  },
  {
    icon: Truck,
    title: 'Road Transport',
    desc: 'Container movement, door-to-door',
    color: 'from-orange-500 to-orange-700',
    href: '/services/road-container-movement',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#0F2C59] overflow-hidden min-h-screen lg:h-screen flex items-center justify-center pt-32 pb-12 lg:pt-40 lg:pb-16"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-55"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Blue Overlay to maintain blue theme */}
      <div className="absolute inset-0 bg-[#0F2C59]/60" />

      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 75% 20%, #60a5fa 0%, transparent 45%)',
        }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full mt-4 lg:mt-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Left copy */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge (Only visible on mobile screen) */}
            <motion.div variants={item} className="md:hidden">
              <span className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                Your Cargo. Our Commitment. Delivering Beyond Expectations.
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-3xl md:text-4xl xl:text-4xl font-extrabold text-white leading-tight text-balance mb-6"
            >
              Seamless Global Logistics &{' '}
              <span className="text-[#F97316]">
                End-to-End Freight Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Premier international logistics partner specializing in
              cross-border air, ocean, and land freight management. We bridge
              global markets with secure, compliant shipping — from origin to
              destination, under one roof.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a05] text-white font-bold px-7 py-3.5 rounded-md transition-colors shadow-lg shadow-[#F97316]/30 text-base"
              >
                Request Quote
                <ArrowRight size={18} />
              </a>
              <Link
                href="/services/air-freight"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-base"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: '50+', label: 'Countries Served' },
                { value: '10K+', label: 'Shipments Delivered' },
                { value: '100%', label: 'In-House Operations' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-3xl font-extrabold text-[#F97316]">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — mode cards */}
          <motion.div
            variants={item}
            className="flex-1 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="grid gap-4">
              {transportModes.map((mode, i) => (
                <motion.div
                  key={mode.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: 'easeOut' as const }}
                >
                  <Link
                    href={mode.href}
                    className="flex items-center gap-5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 hover:border-white/25 transition-all group block"
                  >
                    <div
                      className={`bg-gradient-to-br ${mode.color} p-3.5 rounded-xl shadow-lg flex-shrink-0`}
                    >
                      <mode.icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base group-hover:text-[#F97316] transition-colors">
                        {mode.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-0.5">{mode.desc}</p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-white/30 group-hover:text-[#F97316] group-hover:translate-x-1 transition-all ml-auto"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
