import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  withGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  withGlow = true,
}) => {
  let dimension = 40;
  if (typeof size === 'number') {
    dimension = size;
  } else {
    switch (size) {
      case 'xs':
        dimension = 24;
        break;
      case 'sm':
        dimension = 32;
        break;
      case 'md':
        dimension = 40;
        break;
      case 'lg':
        dimension = 48;
        break;
      case 'xl':
        dimension = 64;
        break;
    }
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: dimension, height: dimension }}
    >
      <svg
        viewBox="0 0 100 100"
        width={dimension}
        height={dimension}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        <defs>
          {/* Background Gradient */}
          <linearGradient id="tjBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#181814" />
            <stop offset="50%" stop-color="#10100D" />
            <stop offset="100%" stop-color="#050504" />
          </linearGradient>

          {/* Border Ring Gradient */}
          <linearGradient id="tjRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#DDF77B" />
            <stop offset="50%" stop-color="#84CC16" />
            <stop offset="100%" stop-color="#6747C7" />
          </linearGradient>

          {/* Letter T Lime Gradient */}
          <linearGradient id="tjLetterT" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F7FEE7" />
            <stop offset="40%" stop-color="#DDF77B" />
            <stop offset="100%" stop-color="#A3E635" />
          </linearGradient>

          {/* Letter J Radiant Gradient */}
          <linearGradient id="tjLetterJ" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF" />
            <stop offset="45%" stop-color="#DDF77B" />
            <stop offset="100%" stop-color="#4D7C0F" />
          </linearGradient>

          {/* Soft Glow */}
          <filter id="tjSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Premium Squircle Frame with Gradient Border */}
        <rect
          x="3.5"
          y="3.5"
          width="93"
          height="93"
          rx="24"
          fill="url(#tjBgGrad)"
          stroke="url(#tjRingGrad)"
          strokeWidth="2.5"
        />

        {/* Ambient Lime Spotlight Glow */}
        {withGlow && (
          <circle cx="50" cy="50" r="26" fill="#DDF77B" opacity="0.12" filter="url(#tjSoftGlow)" />
        )}

        {/* Monogram Graphics Group */}
        <g transform="translate(1, 0)">
          {/* Architectural T: Chamfered Top Bar + Strong Vertical Column */}
          <path
            d="M 21 26 L 66 26 L 62 35.5 L 48.5 35.5 L 48.5 73.5 L 36.5 73.5 L 36.5 35.5 L 24 35.5 Z"
            fill="url(#tjLetterT)"
          />

          {/* Sleek Interlocking J: Dynamic sweep on right curving smoothly underneath */}
          <path
            d="M 68 35.5 L 78.5 35.5 L 78.5 66.5 C 78.5 77.5 70.5 83 58 83 C 47.5 83 39 78.5 33.5 72 L 40 64 C 44 68.5 49.5 71.5 56.5 71.5 C 63 71.5 66.5 68 66.5 62 L 66.5 43.5 L 56 43.5 L 59.5 35.5 L 68 35.5 Z"
            fill="url(#tjLetterJ)"
          />

          {/* Luxury 4-Point Diamond Sparkle Accent in Top Right */}
          <path
            d="M 77 19 L 79.5 24 L 84.5 26.5 L 79.5 29 L 77 34 L 74.5 29 L 69.5 26.5 L 74.5 24 Z"
            fill="#DDF77B"
          />
        </g>
      </svg>
    </div>
  );
};
