import React from 'react';
import './CubeGrid.css';

const ThreeDbg = () => {
  const gridSize = 20; // 20x20 grid
  const center = Math.floor(gridSize / 2);
  const tiles = Array.from({ length: gridSize * gridSize });

  return (
    <div className="grid-background">
      {tiles.map((_, i) => {
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;

        // Distance from center
        const dx = col - center;
        const dy = row - center;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const delay = distance * 80; // Adjust ripple speed

        return (
          <div
            className="tile"
            key={i}
            style={{ animationDelay: `${delay}ms` }}
          />
        );
      })}
    </div>
  );
};

export default ThreeDbg;
