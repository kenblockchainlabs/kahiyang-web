"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo / Brand */}
          <a href="#" className="text-white/90 text-lg font-medium tracking-wide">
            Kahiyang<span className="text-lime-400">.id</span>
          </a>

          {/* Tagline */}
          <p className="text-gray-500 text-sm text-center max-w-md">
            Mulai, Tumbuh, dan Berkembang — Tanpa Batas.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-white/[0.08]" />

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a
              href="https://t.me/+FarOaL4D-HFlMGM1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              Telegram
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="/privacy-policy"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="/terms"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs">
            © 2026 Kahiyang.id — Binar Pagi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
