import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, MapPin, Flag, Mail, Clock, Award } from "lucide-react";
import theme from "../../theme";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "xxxxxx",
    role: "Founder & CEO",
    bio: "Product-minded traveler focused on sustainable experiences and community partnerships.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    id: 2,
    name: "Maya Choden",
    role: "Head of Partnerships",
    bio: "Builds long-term local relationships and curates authentic stay & activity partners.",
    avatar: "https://images.unsplash.com/photo-1545996124-1b5f7f0b0b8b?w=800&q=80",
  },
  {
    id: 3,
    name: "Rinzin Wangmo",
    role: "Design & UX",
    bio: "Designs delightful booking flows that make planning a joy for explorers of all kinds.",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80",
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f3fdfa] to-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/geometry2.png')]"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span
                className="inline-flex items-center gap-2 text-sm rounded-full px-3 py-1 shadow-md"
                style={{ backgroundColor: theme.colors.primary + "22", color: theme.colors.primary }}
              >
                <Globe className="w-4 h-4" />
                Sustainable Travel
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                ExploreEase <br />
                <span style={{ color: theme.colors.primary }}>Travel differently</span>
              </h1>

              <p className="text-slate-600 max-w-xl text-lg">
                We design unforgettable, low-impact trips that connect curious travelers
                with vetted local hosts and authentic experiences. Our goal: make travel
                good for people <em>and</em> the planet.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/plans"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium shadow-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: theme.colors.primary, color: "white" }}
                >
                  Explore Plans
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
                alt="scenic landscape"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission + Stats */}
      <section className="container mx-auto px-6 py-20 space-y-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600 mt-4 text-lg">
            We make sustainable travel accessible by curating community-led stays,
            transparent pricing, and tools that help travelers reduce their footprint
            while maximizing cultural impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: "Trips booked", value: "1,200+" },
            { label: "Local partners", value: "350+" },
            { label: "Avg. traveler rating", value: "4.9" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 rounded-2xl bg-white shadow-lg border-t-4"
              style={{ borderColor: theme.colors.primary }}
            >
              <p
                className="text-3xl font-extrabold"
                style={{ color: theme.colors.primary }}
              >
                {stat.value}
              </p>
              <p className="text-slate-600 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-gradient-to-br from-[#f9fafb] to-[#ecfdf5] py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900">Our Story</h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { year: "2019", title: "Founding", text: "First 5 hosts onboarded." },
              { year: "2021", title: "Growth", text: "120+ partners across 3 regions." },
              { year: "2023", title: "Impact", text: "Local impact reports introduced." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 rounded-2xl shadow-md bg-white border border-slate-100 hover:shadow-xl transition"
              >
                <p
                  className="text-sm font-bold"
                  style={{ color: theme.colors.primary }}
                >
                  {item.year}
                </p>
                <p className="mt-2 font-semibold">{item.title}</p>
                <p className="text-sm text-slate-600 mt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold text-slate-900">Meet the Team</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <motion.div
              key={m.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex gap-4 items-start border border-slate-100"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-slate-900">{m.name}</p>
                <p
                  className="text-sm font-medium"
                  style={{ color: theme.colors.primary }}
                >
                  {m.role}
                </p>
                <p className="mt-2 text-sm text-slate-600">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h4 className="text-xl font-bold">Ready to explore differently?</h4>
            <p className="text-sm text-white/80 mt-2">
              Join our newsletter for curated trips and local stories.
            </p>
          </div>

          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              aria-label="email"
              placeholder="you@domain.com"
              className="flex-1 rounded-lg px-4 py-2 text-slate-900"
            />
            <button
              className="rounded-lg px-4 py-2 font-medium text-white shadow-md hover:shadow-lg transition"
              style={{ backgroundColor: theme.colors.accent }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
