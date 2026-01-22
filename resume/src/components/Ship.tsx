import React, { useState, useEffect } from 'react';

const SHIP_SPEED = 5;

const Ship: React.FC = () => {
  // x and y coordinates for the ship's position
  const [pos, setPos] = useState({ x: 100, y: 100 });
  // 'scaleX(1)' for right, 'scaleX(-1)' for left
  const [facing, setFacing] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPos((prev) => {
        let { x, y } = prev;
        
        if (e.key === 'ArrowUp' || e.key === 'w') y -= SHIP_SPEED;
        if (e.key === 'ArrowDown' || e.key === 's') y += SHIP_SPEED;
        if (e.key === 'ArrowLeft' || e.key === 'a') {
          x -= SHIP_SPEED;
          setFacing(-1); // Flip ship left
        }
        if (e.key === 'ArrowRight' || e.key === 'd') {
          x += SHIP_SPEED;
          setFacing(1); // Flip ship right
        }

        return { x, y };
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `scaleX(${facing})`,
        transition: 'transform 0.2s ease', // Smooth flipping
        zIndex: 10,
      }}
    >
      <img src="/ship.png" alt="Pirate Ship" style={{ width: '100px' }} />
    </div>
  );
};

export default Ship;