'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({
  position,
  color,
  speed,
  distort,
  scale,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y =
      position[1] + Math.sin(time * speed) * 0.5;
    meshRef.current.rotation.x = time * speed * 0.3;
    meshRef.current.rotation.z = time * speed * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.15}
        distort={distort}
        speed={2}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function FloatingGeometry() {
  const shapes = useMemo(
    () => [
      { position: [-5, 2, -5] as [number, number, number], color: '#a855f7', speed: 0.3, distort: 0.4, scale: 1.5 },
      { position: [5, -1, -8] as [number, number, number], color: '#06b6d4', speed: 0.5, distort: 0.3, scale: 2 },
      { position: [0, 3, -6] as [number, number, number], color: '#3b82f6', speed: 0.4, distort: 0.5, scale: 1.2 },
      { position: [-3, -2, -4] as [number, number, number], color: '#ec4899', speed: 0.35, distort: 0.35, scale: 0.8 },
      { position: [4, 1, -10] as [number, number, number], color: '#a855f7', speed: 0.25, distort: 0.45, scale: 2.5 },
    ],
    []
  );

  return (
    <>
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
}
