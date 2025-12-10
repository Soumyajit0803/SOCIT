import React, { useRef, useEffect } from "react";
import "./FooterAnim.css";

const FooterAnim = () => {
    const containerRef = useRef(null);
  
    // 1. REFS to store values without re-rendering
    // Position (X, Y)
    const targetPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    
    // Radius (Size of the hole)
    const targetRadius = useRef(0);  // Target: 0 (closed) or 250 (open)
    const currentRadius = useRef(0); // Current: Animates between 0 and 250
    
    const requestRef = useRef(null);
  
    // CONFIGURATION
    const posEase = 0.1;   // How fast the cursor follows (0.05 = slow, 0.2 = fast)
    const sizeEase = 0.5;  // How fast the circle opens/closes (0.05 = slow, 0.2 = fast)
    const maxRadius = 80; // The size of the hole when fully open
  
    // 2. THE ANIMATION LOOP
    const animate = () => {
      // --- A. ANIMATE POSITION (X, Y) ---
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      
      currentPos.current.x += dx * posEase;
      currentPos.current.y += dy * posEase;
  
      // --- B. ANIMATE RADIUS (Size) ---
      const dr = targetRadius.current - currentRadius.current;
      currentRadius.current += dr * sizeEase;
  
      // --- C. APPLY TO CSS ---
      if (containerRef.current) {
        containerRef.current.style.setProperty('--x', `${currentPos.current.x}px`);
        containerRef.current.style.setProperty('--y', `${currentPos.current.y}px`);
        
        // We only update --r if it's changing significantly to save resources
        if (Math.abs(dr) > 0.1) {
          containerRef.current.style.setProperty('--r', `${currentRadius.current}px`);
        }
      }
  
      requestRef.current = requestAnimationFrame(animate);
    };
  
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []);
  
    // 3. MOUSE EVENTS
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetPos.current.x = e.clientX - rect.left;
      targetPos.current.y = e.clientY - rect.top;
    };
  
    const handleMouseEnter = () => {
      // Set target to Open Size
      targetRadius.current = maxRadius;
    };
  
    const handleMouseLeave = () => {
      // Set target to Closed (0)
      targetRadius.current = 0;
    };

    return (
        <div
            className="anim-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="anim-layer water">
                <img src="/assets/SOCIT.svg" alt="SOCIT Skeleton" />
            </div>
            <div className="anim-layer normal">
                <img src="/assets/SOCIT.svg" alt="SOCIT Normal" />
            </div>
        </div>
    );
};

export default FooterAnim;
