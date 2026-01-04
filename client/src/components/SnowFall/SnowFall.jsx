import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Starfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Low density as requested
    const particleCount = 20; 

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Create Star objects
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        velocity: Math.random() * 0.4 + 0.2, // Slow, elegant fall
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 1. Set font properties
      // Using a fixed size (e.g., 20px) for all stars
      ctx.font = "20px Arial"; 
      ctx.fillStyle = "#d1dbbcff";
      ctx.globalAlpha = 0.7; // 50% opacity
      ctx.textAlign = "center";

      particles.forEach((p) => {
        // 2. Draw the asterisk character
        ctx.fillText("*", p.x, p.y);

        // Position update
        p.y += p.velocity;
        
        // Horizontal "drift" to make it feel more natural
        p.x += Math.sin(p.y / 50) * 0.2;

        // Reset logic (Infinite loop)
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });
    };

    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default Starfall;