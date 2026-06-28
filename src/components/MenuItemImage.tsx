'use client';
import { useState } from 'react';

interface MenuItemImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Renders a dish image with a graceful fallback.
 *
 * Intentionally has NO opacity/transform transitions on the <img>. An animated
 * image promotes itself to a GPU compositing layer, and on some Android GPUs a
 * layer that is mid-transition while the page scrolls gets mis-rasterized into
 * horizontal RGB "scan-line" tearing. Keeping the image as a plain, static
 * element (with a solid background behind it while it decodes) avoids that.
 */
export default function MenuItemImage({ src, alt, className = '' }: MenuItemImageProps) {
  const [error, setError] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden bg-ocean-800 ${className}`}
      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
    >
      {error ? (
        <div className="img-placeholder absolute inset-0">
          <div className="text-center p-4">
            <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
            </svg>
            <span className="text-[0.65rem] opacity-60 tracking-wider">{alt}</span>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
          className="w-full h-full object-cover"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        />
      )}
    </div>
  );
}
