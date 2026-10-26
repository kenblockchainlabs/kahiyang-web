"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

export default function TestShaderPage() {
  return (
    <main className="w-screen h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          {/* TopologyShader plane akan ditambahkan di sini setelah dari Gemini */}
          <mesh>
            <planeGeometry args={[10, 6]} />
            <meshBasicMaterial color="#0a0a0a" />
          </mesh>
        </Suspense>
      </Canvas>
      <div className="fixed bottom-4 left-4 text-white/40 text-xs font-mono">
        /test-shader — Day 3 prototype zone
      </div>
    </main>
  )
}
