"use client"

import { Suspense, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import type * as THREE from "three"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function BurjKhalifaModel() {
  const meshRef = useRef<THREE.Group>(null)

  // For now, we'll create a simple tower-like geometry as placeholder
  // In production, you would load the actual GLTF model

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  useEffect(() => {
    if (meshRef.current) {
      gsap.fromTo(
        meshRef.current.scale,
        { x: 0, y: 0, z: 0 },
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".burj-trigger",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  return (
    <group ref={meshRef}>
      {/* Simplified Burj Khalifa representation */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.3, 4, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry args={[0.05, 0.1, 1, 6]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function EmiratesPlane() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 3
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.5
    }
  })

  return (
    <group ref={meshRef} position={[-5, 2, 0]}>
      {/* Simplified plane representation */}
      <mesh>
        <boxGeometry args={[2, 0.3, 0.2]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
      <mesh position={[0, 0, 0.8]}>
        <boxGeometry args={[0.3, 1, 0.1]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
      <mesh position={[0, 0, -0.8]}>
        <boxGeometry args={[0.3, 1, 0.1]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    </group>
  )
}

function LuxuryCar() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <group ref={meshRef} position={[3, -1, 0]}>
      {/* Simplified luxury car */}
      <mesh>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.6, -0.4, 0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.6, -0.4, 0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[-0.6, -0.4, -0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.6, -0.4, -0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  )
}

interface ThreeSceneProps {
  showPlane?: boolean
  showCar?: boolean
  showBuilding?: boolean
}

export default function ThreeScene({ showPlane = false, showCar = false, showBuilding = true }: ThreeSceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          {showBuilding && <BurjKhalifaModel />}
          {showPlane && <EmiratesPlane />}
          {showCar && <LuxuryCar />}
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
