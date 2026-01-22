import React, { useState, useEffect } from 'react';

const SHIP_SPEED = 12; 

const Ship: React.FC = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [facing, setFacing] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight", " "].indexOf(e.key) > -1) {
          e.preventDefault();
      }

      setPos((prev) => {
        let { x, y } = prev;
        
        if (e.key === 'ArrowUp' || e.key === 'w') y -= SHIP_SPEED;
        if (e.key === 'ArrowDown' || e.key === 's') y += SHIP_SPEED;

        if (e.key === 'ArrowLeft' || e.key === 'a') {
          x -= SHIP_SPEED;
          setFacing(1);
        }
        if (e.key === 'ArrowRight' || e.key === 'd') {
          x += SHIP_SPEED;
          setFacing(-1);
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
        transition: 'transform 0.3s ease-out', 
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <img 
        src="/ship-2.png" 
        alt="Pirate Ship" 
        className="w-32 h-auto drop-shadow-2xl"
      />
    </div>
  );
};

export default Ship;