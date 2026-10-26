"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Kreator Aktif" },
  { value: "5", label: "Akun Dikelola" },
  { value: "7-14", label: "Hari ke Komisi" },
];

const features = [
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>), title: "Bedah Akun Live", desc: "Setiap minggu, akun murid dibedah langsung — hook, timing, konten." },
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>), title: "Sharing Strategi", desc: "Affiliator yang udah pecah telur share cara mereka." },
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>), title: "Update Algoritma", desc: "TikTok ganti algoritma? Komunitas langsung tau." },
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>), title: "Template & Tools", desc: "Template hook, script konten, tools analisa — gratis." },
];

const results = [
  { num: "Pecah Telur", desc: "Komisi pertama dalam 7-14 hari. Dari akun baru, nol pengalaman, sampai closing pertama.", color: "#FF6B35" },
  { num: "Scale Multi-Akun", desc: "Dari 1 akun ke 5 akun. Niche selection, konten batching, komisi repeat.", color: "#0dffd4" },
];

export default function KomunitasPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f0e8", color: "#1a1a1a", fontFamily: "'Inter', -apple-system, sans-serif", overflowX: "hidden" }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", overflow: "hidden" }}>
        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 600 }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 100, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B35" }} />
            <span style={{ fontSize: 11, color: "#FF6B35", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Komunitas TikTok Affiliate</span>
          </motion.div>

          {/* Main text */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(48px, 10vw, 80px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
            <span style={{ display: "block", color: "#1a1a1a" }}>Komunitas</span>
            <span style={{ display: "block", color: "#FF6B35" }}>Kahiyang</span>
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ fontSize: 16, color: "rgba(0,0,0,0.4)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 48px" }}>
            Bukan grup chat biasa. Ini ruang belajar bareng — bedah akun, sharing strategi, sampai pecah telur.
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 400, margin: "0 auto" }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1 + i * 0.15 }} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 16, padding: "20px 12px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#FF6B35", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 9, color: "rgba(0,0,0,0.35)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 4 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FITUR — 3D Card Style ═══ */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 11, color: "rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 600 }}>Yang Kamu Dapat</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", marginTop: 12 }}>
              <span style={{ color: "#1a1a1a" }}>Bukan </span>
              <span style={{ color: "#FF6B35" }}>Kelas Teori</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ background: "#f5f0e8", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 20, padding: 28, transition: "transform 0.3s, box-shadow 0.3s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(0,0,0,0.4)", lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HASIL NYATA ═══ */}
      <section style={{ padding: "100px 24px", background: "#f5f0e8" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, color: "rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 600 }}>Hasil Nyata</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", marginTop: 12 }}>
              <span style={{ color: "#1a1a1a" }}>Bukan </span>
              <span style={{ color: "#FF6B35" }}>Janji</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {results.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 20, padding: 28, textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: r.color, letterSpacing: "-0.03em", marginBottom: 8 }}>{r.num}</div>
                <p style={{ fontSize: 12, color: "rgba(0,0,0,0.4)", lineHeight: 1.6 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ maxWidth: 480, margin: "0 auto", textAlign: "center", background: "#1a1a1a", borderRadius: 24, padding: "48px 32px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 8 }}>Masuk <span style={{ color: "#FF6B35" }}>Gratis</span></h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 32, lineHeight: 1.6 }}>Gabung grup Telegram komunitas. Tanpa syarat.</p>
          <a href="https://t.me/+FarOaL4D-HFlMGM1" style={{ display: "inline-block", padding: "14px 36px", borderRadius: 100, background: "#FF6B35", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "opacity 0.2s" }}>Gabung Grup Telegram →</a>
        </motion.div>
      </section>

    </main>
  );
}
