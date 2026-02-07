import React, { ReactNode, useState, useMemo, MouseEvent } from 'react';

interface RippleState {
  key: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface RippleButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  rippleColor = 'rgba(255, 255, 255, 0.4)',
  rippleDuration = 600,
}) => {
  const [jsRipples, setJsRipples] = useState<RippleState[]>([]);

  const createJsRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const newRipple: RippleState = { key: Date.now(), x, y, size, color: rippleColor };
    setJsRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setJsRipples(currentRipples => currentRipples.filter(r => r.key !== newRipple.key));
    }, rippleDuration);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      createJsRipple(event);
      if (onClick) onClick(event);
    }
  };

  return (
    <>
      <style>{`
        @keyframes ripple-animation {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple-animation var(--ripple-duration) ease-out forwards;
        }
      `}</style>
      <button
        onClick={handleButtonClick}
        disabled={disabled}
        className={`relative overflow-hidden ${className}`}
      >
        <span className="absolute inset-0 pointer-events-none">
          {jsRipples.map(ripple => (
            <span
              key={ripple.key}
              className="absolute rounded-full animate-ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: ripple.color,
                '--ripple-duration': `${rippleDuration}ms`,
              } as React.CSSProperties}
            />
          ))}
        </span>
        {children}
      </button>
    </>
  );
};
