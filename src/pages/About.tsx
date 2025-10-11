
import { motion } from "framer-motion";
import { Users, Mountain, Landmark, Tent, Home} from "lucide-react";

export default function AboutPage()  {
  // 🎨 Local theme constants (all in one file)
  const COLORS = {
    primary: "#005246",   // your green
    secondary: "#fbbf24", // golden accent
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased">

         {/* 🏠 Floating Home Button */}
      <a
        href="/"
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-3 py-2 rounded-full shadow-md hover:shadow-lg transition text-white"
        style={{ backgroundColor: COLORS.primary }}
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Home</span>
      </a>

      {/* Hero / Roots */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f4faf7] to-white">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span
              className="inline-flex items-center gap-2 text-sm rounded-full px-3 py-1 shadow-md"
              style={{
                backgroundColor: COLORS.primary + "22",
                color: COLORS.primary,
              }}
            >
              <Mountain className="w-4 h-4" />
              Born in the Himalayas
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
             Dokpa.in <br />
              <span style={{ color: COLORS.primary }}>
                Rooted in tradition, open to the world
              </span>
            </h1>

            <p className="text-slate-600 max-w-xl text-lg">
            Dokpa began as a community initiative in remote villages,
              designed to bring travelers closer to the spirit of our land — its
              monasteries, traditions, festivals, and warm homestays. Every
              journey you take here is a story of local pride and cultural
              connection.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <img
              src="src/assets/dance.jpg .jpg"
              alt="Local cultural festival"
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact / Achievements */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Our Impact</h2>
          <p className="text-slate-600 text-lg">
            What started as a handful of homestays is now a network of local
            hosts, artisans, and guides who proudly share their culture with the
            world.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Landmark, value: "500+", label: "Local artisans supported" },
            { icon: Tent, value: "300+", label: "Traditional homestays listed" },
            { icon: Users, value: "15,000+", label: "Travelers connected to local culture" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 rounded-2xl bg-white shadow-lg border-t-4 text-center"
              style={{ borderColor: COLORS.primary }}
            >
              <stat.icon
                className="mx-auto w-8 h-8 mb-3"
                style={{ color: COLORS.primary }}
              />
              <p
                className="text-3xl font-extrabold"
                style={{ color: COLORS.primary }}
              >
                {stat.value}
              </p>
              <p className="text-slate-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story / Tradition */}
      <section className="bg-gradient-to-br from-[#f9fafb] to-[#ecfdf5] py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900">Our Story</h3>
          <p className="mt-4 text-slate-600 max-w-3xl">
          Dokpa.in is more than a platform — it’s a bridge between remote
            traditions and global travelers. From monks offering storytelling
            evenings in monasteries to families teaching age-old weaving, our
            journey is about preserving heritage while creating livelihoods.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                year: "2018",
                title: "First Homestay",
                text: "A single village opened doors to curious travelers.",
              },
              {
                year: "2020",
                title: "Festivals & Culture",
                text: "Integrated Losar, harvest, and local festivals into experiences.",
              },
              {
                year: "2024",
                title: "Global Recognition",
                text: "Recognized for sustainable tourism in remote Himalayan regions.",
              },
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
                  style={{ color: COLORS.primary }}
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

      {/* CTA */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{ backgroundColor: COLORS.primary }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h4 className="text-xl font-bold">Be part of our story</h4>
            <p className="text-sm text-white/80 mt-2">
              Travel not just to see, but to belong. Join our cultural journeys.
            </p>
          </div>
          <a
            href="/plans"
            className="rounded-lg px-6 py-3 font-medium text-slate-900 shadow-md hover:shadow-lg transition"
            style={{ backgroundColor: COLORS.secondary }}
          >
            Discover Trips
          </a>
        </div>
      </section>
    </main>
  );
}
