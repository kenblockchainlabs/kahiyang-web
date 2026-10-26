"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#07090e] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-7"
        >
          {/* Logo / Brand */}
          <a href="#" className="text-white text-lg font-semibold tracking-wide">
            Kahiyang<span className="text-emerald-400">.id</span>
          </a>

          {/* Tagline */}
          <p className="text-zinc-300 text-sm text-center max-w-md">
            Mulai, Tumbuh, dan Berkembang — Tanpa Batas.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-white/15" />

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-300">
            <a
              href="https://t.me/+FarOaL4D-HFlMGM1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Telegram
            </a>
            <span className="text-zinc-500">|</span>
            <a
              href="/privacy-policy"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-zinc-500">|</span>
            <a
              href="/terms"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-400 text-xs">
            © 2026 Kahiyang.id — Binar Pagi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
