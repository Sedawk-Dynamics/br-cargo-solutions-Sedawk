'use client'

import { motion } from 'framer-motion'
import { Plane, Ship, Truck, ArrowRight } from 'lucide-react'

const transportModes = [
  {
    icon: Plane,
    title: 'Air Freight',
    desc: 'Time-critical cargo, worldwide hubs',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    desc: 'FCL & LCL across all sea routes',
    color: 'from-[#0F2C59] to-[#1a3d7a]',
  },
  {
    icon: Truck,
    title: 'Road Transport',
    desc: 'Container movement, door-to-door',
    color: 'from-orange-500 to-orange-700',
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
      className="relative bg-[#0F2C59] overflow-hidden min-h-[92vh] flex items-center"
    >
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

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-36 w-full">
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
              className="text-3xl md:text-5xl xl:text-5xl font-extrabold text-white leading-tight text-balance mb-6"
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
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-base"
              >
                Explore Services
              </a>
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
                  className="flex items-center gap-5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/12 transition-colors group"
                >
                  <div
                    className={`bg-gradient-to-br ${mode.color} p-3.5 rounded-xl shadow-lg flex-shrink-0`}
                  >
                    <mode.icon size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">
                      {mode.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-0.5">{mode.desc}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-white/30 group-hover:text-[#F97316] transition-colors ml-auto"
                  />
                </motion.div>
              ))}

              {/* CTA card */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.95, duration: 0.5, ease: 'easeOut' as const }}
                className="flex items-center justify-between bg-[#F97316] rounded-xl p-5 hover:bg-[#ea6a05] transition-colors group"
              >
                <div>
                  <p className="text-white font-bold text-base">
                    Talk to Our Experts
                  </p>
                  <p className="text-white/80 text-sm mt-0.5">
                    +91 9999879337
                  </p>
                </div>
                <ArrowRight
                  size={22}
                  className="text-white group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  )
}
