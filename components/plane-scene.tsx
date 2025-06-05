"use client"

import { Suspense, useRef, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls, PerspectiveCamera, Environment, useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from "three"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function FlyingPlane() {
  const planeRef = useRef<THREE.Group>(null)
  const gltf = useLoader(GLTFLoader, "/model/plane.glb")

  const { scene, animations } = useGLTF("/model/plane.glb")
  const { actions } = useAnimations(animations, planeRef)

  useFrame((state) => {
    if (planeRef.current) {
      const time = state.clock.elapsedTime

      // Complex flying pattern - figure-8 with altitude changes
      const radius = 80
      const speed = 0.5
      const verticalSpeed = 0.2

      // Figure-8 horizontal movement
      planeRef.current.position.x = Math.sin(time * speed) * radius
      planeRef.current.position.z = Math.sin(time * speed * 2) * radius * 0.5

      // Vertical movement (up and down)
      planeRef.current.position.y = Math.sin(time * verticalSpeed) * 2 + 1

      // Banking rotation (tilting during turns)
      const bankAngle = Math.cos(time * speed) * 0.3
      planeRef.current.rotation.z = bankAngle

      // Pitch rotation (nose up/down)
      const pitchAngle = Math.sin(time * verticalSpeed) * 0.2
      planeRef.current.rotation.x = pitchAngle

      // Yaw rotation (turning left/right)
      const yawAngle = Math.cos(time * speed) * 0.4
      planeRef.current.rotation.y = yawAngle + Math.PI / 4

      // Additional smooth rotation for dynamic effect
      planeRef.current.rotation.y += Math.sin(time * 0.1) * 0.1
    }
  })

  useEffect(() => {
    if (planeRef.current) {
      // Initial scale and position
      planeRef.current.scale.setScalar(0.3)

      // GSAP scroll-triggered animations
      gsap.fromTo(
        planeRef.current.scale,
        { x: 0, y: 0, z: 0 },
        {
          x: 0.8,
          y: 0.8,
          z: 0.8,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".plane-trigger",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        },
      )

      // Entrance animation
      gsap.fromTo(
        planeRef.current.position,
        { x: -10, y: -5, z: -10 },
        {
          x: 0,
          y: 1,
          z: 0,
          duration: 3,
          ease: "power2.out",
          delay: 0.5,
        },
      )
    }
    // Play the first animation (GltfAnimation 0)
    const firstActionKey = Object.keys(actions)[0];
    if (actions && firstActionKey && actions[firstActionKey]) {
      actions[firstActionKey].play();
    }
  }, [actions])

  return (
    <group ref={planeRef}>
      <primitive object={gltf.scene} />
    </group>
  )
}

function PlaneTrail() {
  const trailRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (trailRef.current) {
      const time = state.clock.elapsedTime

      // Create trailing effect behind the plane
      trailRef.current.children.forEach((child, index) => {
        const delay = index * 0.1
        const trailTime = time - delay

        if (child instanceof THREE.Mesh) {
          const radius = 50
          const speed = 0.3

          child.position.x = Math.sin(trailTime * speed) * radius
          child.position.z = Math.sin(trailTime * speed * 2) * radius * 0.5
          child.position.y = Math.sin(trailTime * 0.2) * 2 + 1

          // Fade out trail particles
          const material = child.material as THREE.Material
          if (material && material.opacity !== undefined) {
            material.opacity = Math.max(0, 0.8 - index * 0.1)
          }
        }
      })
    }
  })

  // Create trail particles
  const trailParticles = Array.from({ length: 8 }, (_, i) => (
    <mesh key={i} position={[-10, 0, 0]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.8 - i * 0.1} />
    </mesh>
  ))

  return <group ref={trailRef}>{trailParticles}</group>
}

function CloudParticles() {
  const cloudsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.001

      cloudsRef.current.children.forEach((cloud, index) => {
        if (cloud instanceof THREE.Mesh) {
          cloud.rotation.y += 0.002 * (index + 1)
          cloud.position.y += Math.sin(state.clock.elapsedTime + index) * 0.001
        }
      })
    }
  })

  const clouds = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2
    const radius = 8 + Math.random() * 4
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    const y = -2 + Math.random() * 4

    return (
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.5 + Math.random() * 0.5, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
    )
  })

  return <group ref={cloudsRef}>{clouds}</group>
}

export default function PlaneScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
      <Canvas  style={{ width: "100%", height: "100%", background: "transparent" }}
      camera={{ position: [0, 2, 12], fov: 50 }}>
        
        <PerspectiveCamera makeDefault position={[0, 200, 12]} fov={50} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4f46e5" />
        <pointLight position={[10, 5, 10]} intensity={0.4} color="#f59e0b" />

        {/* Environment */}
        <Environment preset="sunset" />

        <Suspense fallback={null}>
          <FlyingPlane />
          <PlaneTrail />
          <CloudParticles />
        </Suspense>

        {/* Camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}
