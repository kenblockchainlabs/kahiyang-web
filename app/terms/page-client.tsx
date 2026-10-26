"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#00e5ff" }}
        >
          Terms of Service
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-12"
        >
          Terakhir diperbarui: 1 Juni 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-8 text-gray-300 leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Penerimaan Syarat</h2>
            <p>
              Dengan mengakses dan menggunakan Kahiyang.id, Anda menyetujui untuk
              terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju, mohon
              untuk tidak menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Deskripsi Layanan</h2>
            <p>
              Kahiyang.id menyediakan platform edukasi, konsultasi, dan konten
              seputar pengembangan diri, digital marketing, dan strategi bisnis.
              Layanan mencakup kelas online, konten informatif, dan kemitraan strategis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Penggunaan yang Diizinkan</h2>
            <p className="mb-3">Anda setuju untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Menggunakan layanan untuk tujuan yang sah</li>
              <li>Tidak menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
              <li>Tidak menggunakan layanan untuk aktivitas yang melanggar hukum</li>
              <li>Tidak mengganggu atau merusak infrastruktur layanan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Hak Kekayaan Intelektual</h2>
            <p>
              Seluruh konten di Kahiyang.id, termasuk teks, grafik, logo, dan materi
              digital lainnya, adalah milik Kahiyang.id dan dilindungi oleh hukum hak
              cipta yang berlaku.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Pembatasan Tanggung Jawab</h2>
            <p>
              Kahiyang.id tidak bertanggung jawab atas kerugian langsung, tidak langsung,
insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan
              menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Tautan Pihak Ketiga</h2>
            <p>
              Layanan kami dapat berisi tautan ke situs pihak ketiga. Kami tidak
              bertanggung jawab atas konten atau praktik privasi situs tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Perubahan Syarat</h2>
            <p>
              Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan
              berlaku segera setelah dipublikasikan di halaman ini. Penggunaan berkelanjutan
              setelah perubahan berarti Anda menerima syarat yang diperbarui.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Kontak</h2>
            <p>
              Untuk pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami di:{" "}
              <a href="mailto:admin@kahiyang.id" className="text-cyan-400 hover:underline">
                admin@kahiyang.id
              </a>
            </p>
          </section>
        </motion.div>
      </section>
    </main>
  );
}
