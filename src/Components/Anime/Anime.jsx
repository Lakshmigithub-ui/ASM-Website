import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import "./Anime.css"; // Import animejs

const Anime = () => {
  useEffect(() => {
    const numberOfEls = 1000;
    const duration = 1000;
    const midScreenX = window.innerWidth / 2;
    const midScreenY = window.innerHeight / 2;
    const radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);

    // Create particles
    for (let i = 0; i < numberOfEls; i++) {
      const hue = Math.round(360 / numberOfEls * i);
      const angle = Math.random() * Math.PI * 2;
      const el = document.createElement('div');
      el.classList.add('particule');
      el.style.backgroundColor = `hsl(${hue}, 40%, 60%)`;
      el.style.width = '1px';
      el.style.height = '1px';
      el.style.position = 'absolute'; // Make sure to set position for animation

      // Animate the particle
      anime({
        targets: el,
        width: ['1px', '10px'],
        height: ['1px', '10px'],
        left: [`${midScreenX}px`, `${Math.cos(angle) * radius + midScreenX}px`],
        top: [`${midScreenY}px`, `${Math.sin(angle) * radius + midScreenY}px`],
        delay: (duration / numberOfEls) * i,
        duration: duration,
        easing: 'easeInExpo',
        loop: true
      });

      // Append particle to the document
      document.body.appendChild(el);
    }

    // Cleanup function to remove particles
    return () => {
      const particles = document.querySelectorAll('.particule');
      particles.forEach(particle => particle.remove());
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return null; // No need to render anything in this component
};

export default Anime;
