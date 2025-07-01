import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// --- Individual Tile Component ---
function Tile({ position, initialOffset, material }) { // Pass material down as prop
  const mesh = useRef();

  useFrame(({ clock }) => {
    // Basic sine wave animation for vertical movement
    const time = clock.getElapsedTime() * 0.5; // Slow down the animation
    // Add an offset based on tile position for a wave-like effect
    const offset = (position[0] + position[1]) * 0.2;
    mesh.current.position.y = position[1] + Math.sin(time + offset + initialOffset) * 0.1; // Adjust amplitude (0.1)

    // Optional: Subtle rotation
    mesh.current.rotation.x = Math.sin(time * 0.5 + offset) * 0.05;
    mesh.current.rotation.z = Math.cos(time * 0.5 + offset) * 0.05;
  });

  return (
    <mesh ref={mesh} position={position} material={material}>
      <boxGeometry args={[0.9, 0.9, 0.9]} /> {/* Tile size remains fixed */}
    </mesh>
  );
}

// --- Camera Controller Component (to adjust camera based on aspect ratio) ---
function CameraController({ gridSize, tileSize, spacing }) {
  const { camera, size } = useThree();
  const totalGridWidth = gridSize * tileSize;

  useEffect(() => {
    // This effect runs whenever the canvas size changes
    const aspect = size.width / size.height;

    // Calculate a comfortable initial camera Z position based on desired visible area
    // The goal is to fit the grid horizontally or vertically based on aspect ratio.
    // We want the grid to always be visible, possibly with some padding.

    const targetAspect = 1; // Assuming a square grid for calculation (gridSize x gridSize)
    let newZ;

    if (aspect >= targetAspect) {
      // Wider than tall (desktop-like): fit to height
      // Fov 75 means tan(75/2) is ~1.03
      // Height = 2 * tan(fov/2) * distance
      // So distance = Height / (2 * tan(fov/2))
      const gridHeight = gridSize * spacing;
      newZ = (gridHeight / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) + 5; // +5 for some padding
    } else {
      // Taller than wide (mobile-like): fit to width
      // Width = 2 * tan(fov/2) * distance * aspect
      // So distance = (Width / aspect) / (2 * tan(fov/2))
      const gridWidth = gridSize * spacing;
      newZ = (gridWidth / aspect / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) + 5; // +5 for some padding
    }

    camera.position.z = newZ;
    camera.updateProjectionMatrix();

  }, [camera, size, gridSize, tileSize, spacing]);

  // OrbitControls for development/debugging - remove in production
  // You can comment this out or remove it for production
  // return <OrbitControls />;
  return null; // Return null if you don't want controls
}


// --- Main 3D Background Component ---
function ThreeDbg() {
  // Use state or props to control grid size if needed for different screen types
  // For responsiveness, keep the gridSize constant for consistency in pattern,
  // and let the camera adjust.
  const gridSize = 20; // Increased grid size slightly for better fill on various screens
  const tileSize = 1;
  const spacing = 1;

  // Use a single material instance and pass it to tiles for performance
  const tileMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.8, metalness: 0.1 });
  }, []);

  // Generate tiles only once using useMemo
  const tiles = useMemo(() => {
    const generatedTiles = [];
    let tileIndex = 0;
    const startX = -(gridSize * spacing) / 2 + spacing / 2;
    const startY = -(gridSize * spacing) / 2 + spacing / 2;

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const position = [
          startX + x * spacing,
          startY + y * spacing,
          0 // Z-position, keep it flat for a 2D-looking grid
        ];
        const initialOffset = Math.random() * Math.PI * 2;
        generatedTiles.push(
          <Tile
            key={`tile-${tileIndex++}`}
            position={position}
            initialOffset={initialOffset}
            material={tileMaterial} // Pass the shared material
          />
        );
      }
    }
    return generatedTiles;
  }, [gridSize, tileSize, spacing, tileMaterial]);

  return (
    <Canvas
      camera={{
        position: [0, 0, 15], // Initial position, will be adjusted by CameraController
        fov: 75, // Keep FOV constant for consistent perspective
        near: 0.1,
        far: 1000
      }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
      className="three-canvas"
    >
      {/* Lights for the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
      />
      <directionalLight
        position={[-5, -10, -5]}
        intensity={0.3}
      />

      {/* Renders all the generated tiles */}
      {tiles}

      {/* Environment for subtle global illumination and reflections */}
      <Environment preset="studio" />

      {/* Camera controller to adjust zoom based on aspect ratio */}
      <CameraController gridSize={gridSize} tileSize={tileSize} spacing={spacing} />
    </Canvas>
  );
}

export default ThreeDbg;