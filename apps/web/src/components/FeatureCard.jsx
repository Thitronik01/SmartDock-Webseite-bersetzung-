
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile.jsx';

const FeatureCard = ({ icon: Icon, label, videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isMobile = useIsMobile();
  const cardRef = useRef(null);
  const [cardRect, setCardRect] = useState(null);

  const handleOpen = () => {
    if (cardRef.current) {
      setCardRect(cardRef.current.getBoundingClientRect());
    }
    setIsClosing(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200); // Match animation duration
  };

  const handleMouseEnter = () => {
    if (!isMobile) handleOpen();
  };

  const handleMouseLeave = () => {
    if (!isMobile) handleClose();
  };

  const handleClick = () => {
    if (isMobile) handleOpen();
  };

  // Update rect on scroll/resize if open on desktop
  useEffect(() => {
    if (!isOpen || isMobile) return;
    
    const updateRect = () => {
      if (cardRef.current) {
        setCardRect(cardRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);
    return () => {
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
    };
  }, [isOpen, isMobile]);

  const renderPopup = () => {
    if (!isOpen && !isClosing) return null;

    const popupClass = isClosing ? 'animate-popup-out' : 'animate-popup-in';
    const backdropClass = isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in';

    if (isMobile) {
      return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className={`absolute inset-0 bg-background/80 backdrop-blur-sm ${backdropClass}`}
            onClick={handleClose}
          />
          <div className={`relative w-full max-w-md aspect-square bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 z-10 ${popupClass}`}>
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-background/50 hover:bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center text-foreground transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
            <video 
              src={videoUrl} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </div>
        </div>,
        document.body
      );
    }

    // Desktop Portal
    if (!cardRect) return null;

    // Position above the card, centered horizontally
    const popupSize = 320;
    const top = cardRect.top - popupSize - 20; // 20px gap
    const left = cardRect.left + (cardRect.width / 2) - (popupSize / 2);

    return createPortal(
      <div 
        className={`fixed z-50 w-[320px] h-[320px] bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 pointer-events-none ${popupClass}`}
        style={{ 
          top: `${Math.max(20, top)}px`, 
          left: `${Math.max(20, Math.min(left, window.innerWidth - popupSize - 20))}px` 
        }}
      >
        <video 
          src={videoUrl} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
      </div>,
      document.body
    );
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="bg-card/40 backdrop-blur-md border border-border/20 p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-card/80 transition-colors shadow-lg cursor-pointer group"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <span className="font-medium text-sm text-foreground text-balance leading-snug">
          {label}
        </span>
      </div>
      {renderPopup()}
    </>
  );
};

export default FeatureCard;
