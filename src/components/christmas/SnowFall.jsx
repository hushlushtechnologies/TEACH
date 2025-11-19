 import { useEffect } from "react";

const SnowfallEffect = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "snowfall";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createParticles() {
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1,
          d: Math.random() * 1 + 0.5,
          isSparkle: Math.random() > 0.85, // Small chance of sparkle
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = p.isSparkle
          ? "rgba(255, 215, 0, 0.8)" // Golden sparkle
          : "rgba(255, 255, 255, 0.9)";

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        ctx.fill();
      });

      updateParticles();
    }

    let angle = 0;

    function updateParticles() {
      angle += 0.002;

      particles.forEach((p, index) => {
        p.y += Math.cos(angle + p.d) + p.d;
        p.x += Math.sin(angle) * 0.8;

        // Respawn when off-screen
        if (p.y > canvas.height) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: -5,
            r: p.r,
            d: p.d,
            isSparkle: Math.random() > 0.85,
          };
        }
      });
    }

    createParticles();

    let animationFrame;
    const animate = () => {
      drawParticles();
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default SnowfallEffect;
