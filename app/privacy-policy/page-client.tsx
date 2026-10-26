"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
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
            <h2 className="text-2xl font-semibold text-white mb-3">1. Pendahuluan</h2>
            <p>
              Kahiyang.id (&quot;kami&quot;) berkomitmen melindungi privasi pengguna
              (&quot;Anda&quot;). Kebijakan ini menjelaskan bagaimana kami mengumpulkan,
              menggunakan, dan melindungi informasi pribadi Anda saat mengakses situs web
              dan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Informasi yang Kami Kumpulkan</h2>
            <p className="mb-3">Kami dapat mengumpulkan informasi berikut:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Informasi Pribadi:</strong> nama, alamat email, nomor telepon, dan informasi kontak lainnya yang Anda berikan secara sukarela.</li>
              <li><strong className="text-white">Informasi Penggunaan:</strong> data tentang bagaimana Anda mengakses dan menggunakan situs kami, termasuk alamat IP, jenis browser, halaman yang dikunjungi, dan waktu akses.</li>
              <li><strong className="text-white">Cookie dan Teknologi Pelacakan:</strong> kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menganalisis lalu lintas situs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Penggunaan Informasi</h2>
            <p className="mb-3">Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Menyediakan dan memelihara layanan kami</li>
              <li>Memberikan dukungan pelanggan</li>
              <li>Menganalisis penggunaan untuk meningkatkan layanan</li>
              <li>Mengirimkan informasi promosi dan pembaruan (dengan persetujuan Anda)</li>
              <li>Mematuhi kewajiban hukum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Berbagi Informasi</h2>
            <p>
              Kami tidak menjual informasi pribadi Anda kepada pihak ketiga. Kami dapat
              berbagi informasi dengan mitra tepercaya yang membantu kami mengoperasikan
              situs dan menyediakan layanan, tunduk pada perjanjian kerahasiaan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Keamanan Data</h2>
            <p>
              Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi
              informasi pribadi Anda dari akses, perubahan, atau pengungkapan yang tidak
              sah. Namun, tidak ada metode transmisi melalui internet yang 100% aman.
            </p>
          </section>

          <section>
<h2 className="text-2xl font-semibold text-white mb-3">6. Hak Anda</h2>
            <p className="mb-3">Anda memiliki hak untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mengakses data pribadi Anda</li>
              <li>Memperbaiki data yang tidak akurat</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Menarik persetujuan pemrosesan data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, hubungi kami
              di:{" "}
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
