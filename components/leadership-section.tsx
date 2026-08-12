'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, BadgeCheck, Users, Globe } from 'lucide-react'

const stats = [
  { icon: Globe, value: '50+', label: 'Countries Reached' },
  { icon: BadgeCheck, value: '100%', label: 'In-House Managed' },
  { icon: Users, value: '500+', label: 'Satisfied Clients' },
]

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Director card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative rounded-2xl p-10 md:p-14 pt-12 md:pt-16 text-white overflow-hidden shadow-xl border border-slate-800">
              {/* Background Image */}
              <Image
                src="/leadership-msg.jpg"
                alt="Leadership Message"
                fill
                priority
                className="object-cover pointer-events-none"
              />
              {/* Dark tint overlay (no blue) */}
              <div className="absolute inset-0 bg-black/65" />

              {/* Decorative quote mark */}
              <div aria-hidden className="absolute top-6 right-8 opacity-15 z-10">
                <Quote size={72} />
              </div>

              <div className="relative z-10 pt-8 md:pt-10">
                <blockquote className="text-white text-lg leading-relaxed italic mt-6 mb-8 border-l-4 border-[#F97316] pl-6 font-medium">
                  &ldquo; Every shipment represents more than cargo; it represents
                  commitments, opportunities, and the trust our clients place in
                  us. We don&apos;t simply transport cargo — we build lasting
                  partnerships through trust, accountability, and consistent
                  performance. &rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-white text-lg">
                      Balvinder Chauhan
                    </p>
                    <p className="text-[#F97316] font-semibold text-sm">
                      Director, BR Cargo Solutions Pvt. Ltd.
                    </p>
                    <p className="text-white/80 text-xs mt-1">
                      +91 9999879337
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F97316]/15 rounded-2xl -z-10"
            />
          </motion.div>

          {/* Right: company values + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C59] text-balance mb-5">
              A Message from Our Director
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-8">
              Under the leadership of Mr. Balvinder Chauhan, BR Cargo Solutions
              has grown from a vision of simplifying global trade into a
              full-service international logistics company. Our success is built
              on long-term relationships, exceptional service, and an unwavering
              commitment to customer satisfaction.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-10">
              We continuously invest in our people, technology, and network to
              ensure we deliver efficient, secure, and cost-effective logistics
              solutions — because your growth is our mission.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 text-center"
                >
                  <s.icon
                    size={22}
                    className="text-[#F97316] mx-auto mb-2"
                  />
                  <p className="text-2xl font-extrabold text-[#0F2C59]">
                    {s.value}
                  </p>
                  <p className="text-[#64748B] text-xs mt-1 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
