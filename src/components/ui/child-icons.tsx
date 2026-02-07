import React from 'react';
import { cn } from '@/lib/utils';

interface ChildIconProps {
  className?: string;
  size?: number;
}

// Wrapper that adds "hand-drawn" style with slightly wobbly lines
const IconWrapper = ({ 
  children, 
  className, 
  size = 24 
}: { 
  children: React.ReactNode; 
  className?: string; 
  size?: number;
}) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    width={size}
    height={size}
    className={cn("child-icon", className)}
    style={{
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    {children}
  </svg>
);

// Baby face - simple cute face
export const ChildBaby = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8.5 10.5c0.2-0.5 0.8-0.5 1 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14.5 10.5c0.2-0.5 0.8-0.5 1 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 14.5c1.2 1.5 4.8 1.5 6 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 6c1-2 3-3 5-3s4 1 5 3" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Girl face with pigtails
export const ChildGirl = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 12c0 0.5 0.2 1 0.5 1s0.5-0.5 0.5-1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
    <path d="M13.5 12c0 0.5 0.2 1 0.5 1s0.5-0.5 0.5-1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
    <path d="M9.5 16c1 1 4 1 5 0" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 8c0.5-2 2.5-3 5-3s4.5 1 5 3" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Boy face with spiky hair
export const ChildBoy = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 12c0 0.5 0.3 1 0.5 1s0.5-0.5 0.5-1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
    <path d="M13.5 12c0 0.5 0.3 1 0.5 1s0.5-0.5 0.5-1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
    <path d="M9.5 16.5c1 0.8 4 0.8 5 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 7l2 2M8 5l1.5 3M11 4l0.5 3M14 4l-0.5 3M16 5l-1.5 3M18 7l-2 2" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Toddler face
export const ChildToddler = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="11" r="1" fill="currentColor" />
    <circle cx="15" cy="11" r="1" fill="currentColor" />
    <path d="M10 15c0.8 1 3.2 1 4 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 6c0.5-0.8 1.5-1.2 2-1.2M16 6c-0.5-0.8-1.5-1.2-2-1.2M10.5 5c0.5 0.3 2.5 0.3 3 0" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Balloon
export const ChildBalloon = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <ellipse cx="12" cy="9" rx="7" ry="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 17v5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 19c0.8 0.5 3.2 0.5 4 0" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 6c-0.5 0.8-0.3 2 0.5 2.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </IconWrapper>
);

// Confetti / Party
export const ChildConfetti = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M5 19L11 4" stroke="currentColor" strokeWidth="2" />
    <path d="M19 19L13 4" stroke="currentColor" strokeWidth="2" />
    <circle cx="8" cy="10" r="1.5" fill="currentColor" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    <path d="M6 6l1 2M18 6l-1 2M3 12l2 0.5M21 12l-2 0.5" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Star
export const ChildStar = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path 
      d="M12 3l2.5 5.5 6 0.8-4.3 4.2 1 6-5.2-2.7-5.2 2.7 1-6-4.3-4.2 6-0.8z" 
      stroke="currentColor" 
      strokeWidth="1.8"
      fill="none"
    />
  </IconWrapper>
);

// Cake
export const ChildCake = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <rect x="3" y="10" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 14h18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 10V7M12 10V6M16 10V7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 7c0.5-1 1.5-1 2 0M11 6c0.5-1 1.5-1 2 0M15 7c0.5-1 1.5-1 2 0" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="4" rx="0.8" ry="1.2" fill="currentColor" opacity="0.7" />
  </IconWrapper>
);

// Party popper
export const ChildPartyPopper = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 20l6-14 8 8-14 6z" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <circle cx="15" cy="6" r="1.5" fill="currentColor" />
    <circle cx="19" cy="10" r="1.2" fill="currentColor" />
    <circle cx="18" cy="5" r="1" fill="currentColor" />
    <path d="M13 3l0.5 2M20 8l2-0.5M16 13l1.5 1" stroke="currentColor" strokeWidth="1.2" />
  </IconWrapper>
);

// Gamepad / Games
export const ChildGamepad = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <rect x="2" y="7" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17" cy="11" r="1.2" fill="currentColor" />
    <circle cx="17" cy="15" r="1.2" fill="currentColor" />
    <path d="M6 13h4M8 11v4" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Camera
export const ChildCamera = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="13" r="1.5" fill="currentColor" />
    <path d="M7 7l1.5-3h7l1.5 3" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Gift box
export const ChildGift = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <rect x="3" y="9" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 9v12" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="6" width="20" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 6c-2-3-5-3-5-1s3 1 5 1s5 1 5-1s-3-2-5 1" stroke="currentColor" strokeWidth="1.3" fill="none" />
  </IconWrapper>
);

// Superhero / Animator
export const ChildSuperhero = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 7c1.5 1 3.5 1 5 0" stroke="currentColor" strokeWidth="1.8" fill="currentColor" />
    <circle cx="10" cy="10" r="0.8" fill="currentColor" />
    <circle cx="14" cy="10" r="0.8" fill="currentColor" />
    <path d="M10 12.5c0.8 0.6 3.2 0.6 4 0" stroke="currentColor" strokeWidth="1.2" />
    <path d="M5 16c0 3 3 5 7 5s7-2 7-5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 16v-2M16 16v-2" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Speech bubble / Логопед
export const ChildSpeech = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 5h16c1 0 2 1 2 2v8c0 1-1 2-2 2h-8l-5 4v-4H4c-1 0-2-1-2-2V7c0-1 1-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 10h2M11 10h2M15 10h2" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Dancing figure / Танцы
export const ChildDancing = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 13l-4 7M12 13l4 7" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 9c1 1 2.5 1.5 4 1.5s3-0.5 4-1.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M6 7l2 2M18 7l-2 2" stroke="currentColor" strokeWidth="1.3" />
  </IconWrapper>
);

// Pencil writing / Каллиграфия
export const ChildPencil = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 17l2-12 3 1.5L8 17H5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M7 5l1.5-2.5 1.5 1-1.5 2.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M11 18c1-1 2-0.5 3-1s1.5-1.5 3-1" stroke="currentColor" strokeWidth="1.3" />
  </IconWrapper>
);

// Chess piece / Шахматы
export const ChildChess = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M9 21h6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 18h4l1 3H9l1-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M10 18c0-2-2-4-2-8 0-3 2-5 4-5s4 2 4 5c0 4-2 6-2 8" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
  </IconWrapper>
);

// Paint palette / Рисование
export const ChildPalette = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <ellipse cx="12" cy="13" rx="10" ry="8" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8" cy="11" r="1.5" fill="currentColor" />
    <circle cx="12" cy="9" r="1.5" fill="currentColor" />
    <circle cx="16" cy="11" r="1.5" fill="currentColor" />
    <circle cx="14" cy="15" r="1.5" fill="currentColor" />
    <ellipse cx="7" cy="15" rx="2" ry="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
  </IconWrapper>
);

// Music note / Музыка
export const ChildMusic = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <ellipse cx="7" cy="18" rx="3" ry="2.5" stroke="currentColor" strokeWidth="1.8" />
    <ellipse cx="17" cy="16" rx="3" ry="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 18V6c0-1 1-2 2-2h6c1 0 1.5 0.8 1.5 1.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M20 16V5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 10h10" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Hospital / По болезни
export const ChildHospital = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" />
  </IconWrapper>
);

// Beach umbrella / По отпуску
export const ChildBeach = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 3c-5 0-9 3-9 7h18c0-4-4-7-9-7z" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" />
    <path d="M6 7c2 1 4 1.5 6 1.5s4-0.5 6-1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Woman face - for testimonials
export const ChildWoman = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8.5 11c0 0.5 0.3 1 0.6 1s0.6-0.5 0.6-1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
    <path d="M14.3 11c0 0.5 0.3 1 0.6 1s0.6-0.5 0.6-1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
    <path d="M9 15c1.2 1.2 4.8 1.2 6 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 9c1-4 4-5 7-5s6 1 7 5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 11c0.5 0.5 1 0 1.5-0.5M20 11c-0.5 0.5-1 0-1.5-0.5" stroke="currentColor" strokeWidth="1.2" />
  </IconWrapper>
);

// Woman with different hair
export const ChildWomanAlt = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9.5" cy="11" r="0.8" fill="currentColor" />
    <circle cx="14.5" cy="11" r="0.8" fill="currentColor" />
    <path d="M9.5 14.5c1 1 4 1 5 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 10c0-5 4-7 8-7s8 2 8 7" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 10c-0.5 2 0 5 0.5 6M20 10c0.5 2 0 5-0.5 6" stroke="currentColor" strokeWidth="1.3" />
  </IconWrapper>
);

// Man face
export const ChildMan = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
    <rect x="8.5" y="10" width="1.5" height="2" rx="0.5" fill="currentColor" />
    <rect x="14" y="10" width="1.5" height="2" rx="0.5" fill="currentColor" />
    <path d="M9.5 16c1 0.8 4 0.8 5 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 9l3 1M19 9l-3 1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 7c2-3 5-3 6-3s4 0 6 3" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Woman with curly hair
export const ChildWomanCurly = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9.5" cy="12" r="0.8" fill="currentColor" />
    <circle cx="14.5" cy="12" r="0.8" fill="currentColor" />
    <path d="M10 15.5c0.8 0.8 3.2 0.8 4 0" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="9" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="18" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
  </IconWrapper>
);

// Lightbulb / Tip
export const ChildLightbulb = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 3c-4 0-6 3-6 6 0 2.5 2 4 2 6v1h8v-1c0-2 2-3.5 2-6 0-3-2-6-6-6z" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M9 19h6M10 21h4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v3M10 9h4" stroke="currentColor" strokeWidth="1.3" />
  </IconWrapper>
);

// Giraffe - cute animal
export const ChildGiraffe = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <ellipse cx="12" cy="6" rx="4" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 3l-1-2M15 3l1-2" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="10" cy="5.5" r="0.6" fill="currentColor" />
    <circle cx="14" cy="5.5" r="0.6" fill="currentColor" />
    <path d="M10.5 7.5c0.6 0.5 2.4 0.5 3 0" stroke="currentColor" strokeWidth="1" />
    <path d="M12 9.5v8" stroke="currentColor" strokeWidth="2" />
    <circle cx="10" cy="12" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="14" cy="14" r="0.8" fill="currentColor" opacity="0.5" />
    <path d="M8 21c2-3 1-4 4-4s2 1 4 4" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Owl - wise bird
export const ChildOwl = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <ellipse cx="12" cy="14" rx="7" ry="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8l3 3M19 8l-3 3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="15" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
    <path d="M12 15l-1 2h2l-1-2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" />
    <path d="M8 19c1.5 0.8 6.5 0.8 8 0" stroke="currentColor" strokeWidth="1" />
  </IconWrapper>
);

// Panda - cute bear
export const ChildPanda = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" fill="currentColor" />
    <circle cx="18" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" fill="currentColor" />
    <ellipse cx="8.5" cy="11" rx="2.5" ry="2" fill="currentColor" />
    <ellipse cx="15.5" cy="11" rx="2.5" ry="2" fill="currentColor" />
    <circle cx="8" cy="10.5" r="0.8" fill="white" />
    <circle cx="15" cy="10.5" r="0.8" fill="white" />
    <ellipse cx="12" cy="15" rx="1.5" ry="1" fill="currentColor" />
    <path d="M10 17c0.8 0.8 3.2 0.8 4 0" stroke="currentColor" strokeWidth="1" />
  </IconWrapper>
);

// Hedgehog - cute spiky friend
export const ChildHedgehog = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <ellipse cx="10" cy="15" rx="6" ry="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 10l1-4M15 11l3-3M17 14l4-1M14 8l2-3M16 12l3-1" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7" cy="14" r="0.6" fill="currentColor" />
    <circle cx="10" cy="14" r="0.6" fill="currentColor" />
    <ellipse cx="5" cy="16" rx="1" ry="0.7" fill="currentColor" />
    <path d="M6 17.5c1.5 0.8 4 0.8 5.5 0" stroke="currentColor" strokeWidth="1" />
  </IconWrapper>
);

// Fox - clever animal
export const ChildFox = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 20c-5 0-8-3-8-7 0-3 2-6 4-8l4 4 4-4c2 2 4 5 4 8 0 4-3 7-8 7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M4 5l4 3M20 5l-4 3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
    <ellipse cx="12" cy="15" rx="1.2" ry="0.8" fill="currentColor" />
    <path d="M12 15.8v1.5M10 18c0.8 0.5 3.2 0.5 4 0" stroke="currentColor" strokeWidth="1" />
  </IconWrapper>
);

// Bear - teddy bear
export const ChildBear = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="9" cy="11" r="1" fill="currentColor" />
    <circle cx="15" cy="11" r="1" fill="currentColor" />
    <ellipse cx="12" cy="14.5" rx="2" ry="1.5" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="14" rx="0.8" ry="0.5" fill="currentColor" />
    <path d="M11 16c0.4 0.5 1.6 0.5 2 0" stroke="currentColor" strokeWidth="1" />
  </IconWrapper>
);

// House / Home
export const ChildHome = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M3 11l9-8 9 8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5 10v10h14V10" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
    <path d="M12 14v6" stroke="currentColor" strokeWidth="1" />
  </IconWrapper>
);

// Clock / Time
export const ChildClock = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 6v6l4 3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </IconWrapper>
);

// Tree / Nature
export const ChildTree = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 22v-8" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="12" cy="9" rx="7" ry="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="8" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="14" cy="6" r="0.8" fill="currentColor" opacity="0.3" />
    <circle cx="11" cy="11" r="1.2" fill="currentColor" opacity="0.3" />
  </IconWrapper>
);

// Heart
export const ChildHeart = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 20s-8-5-8-11c0-3 2-5 5-5 2 0 3 1.5 3 1.5s1-1.5 3-1.5c3 0 5 2 5 5 0 6-8 11-8 11z" stroke="currentColor" strokeWidth="1.8" fill="none" />
  </IconWrapper>
);

// Shield / Safety
export const ChildShield = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 3l8 4v5c0 5-4 9-8 10-4-1-8-5-8-10V7l8-4z" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" />
  </IconWrapper>
);

// Food / Utensils
export const ChildFood = ({ className, size = 24 }: ChildIconProps) => (
  <IconWrapper className={className} size={size}>
    <path d="M6 3v18M6 3c0 3 2 5 2 8s-2 5-2 5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18 3v7c0 2-1.5 3-3 3v8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18 3c0 2-1 4-3 4" stroke="currentColor" strokeWidth="1.3" />
    <ellipse cx="12" cy="18" rx="3" ry="2" stroke="currentColor" strokeWidth="1.3" />
  </IconWrapper>
);
