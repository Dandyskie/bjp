import { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchend', handleInteractionEnd);
    } else {
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
    }
    return () => {
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => handleInteractionStart(e.clientX)}
      onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-slate-900/70 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">
        After
      </div>

      {/* Before Image (Foreground, Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute top-4 left-4 bg-slate-900/70 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <ArrowLeftRight size={20} className="text-slate-800" />
        </div>
      </div>
    </div>
  );
}
