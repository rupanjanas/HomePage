import React from 'react';
import './CubeGrid.css';

const ThreeDbg = () => {
  // We don't need gridSize or center for calculating random delays,
  // but we still need to generate enough tiles to cover the screen.
  // A 20x20 array gives 400 tiles, usually enough for a standard screen.
  const numberOfTiles = 400; // Or calculate based on desired density, e.g., (viewportWidth / tileSize) * (viewportHeight / tileSize)
  const tiles = Array.from({ length: numberOfTiles });

  return (
    <div className="grid-background">
      {tiles.map((_, i) => {
        // Generate a random delay for EACH tile.
        // This is the key to removing the pattern.
        // The 5000ms (5 seconds) means each tile's animation can start anywhere
        // between 0 and 5 seconds into the overall animation cycle.
        const randomDelay = Math.random() * 5000; // Random delay between 0 and 5000ms

        return (
          <div
            className="tile"
            key={i}
            // Apply the random delay to each tile's popOut animation
            style={{ animationDelay: `${randomDelay}ms` }}
          />
        );
      })}
    </div>
  );
};

export default ThreeDbg;