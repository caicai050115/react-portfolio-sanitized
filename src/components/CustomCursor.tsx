import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor || !window.matchMedia('(pointer: fine)').matches) {
      return undefined;
    }

    let animationFrame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      animationFrame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.dataset.visible = 'true';
    };

    const handlePointerLeave = () => {
      cursor.dataset.visible = 'false';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-inverter" aria-hidden="true" />;
}
