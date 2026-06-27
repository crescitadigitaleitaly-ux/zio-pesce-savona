'use client';
import { useState, useRef, useEffect } from 'react';

interface MenuItemImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MenuItemImage({ src, alt, className = '' }: MenuItemImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Fix hydration race: if the browser finished loading the image before React
  // attached the onLoad handler (common on fast/cached responses), the load
  // event never reaches us and the placeholder would stay stuck. Re-sync from
  // the DOM element's own state on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      if (img.naturalWidth > 0) setLoaded(true);
      else setError(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder shown while loading and whenever the image is unavailable */}
      {(!loaded || error) && (
        <div className="img-placeholder absolute inset-0">
          <div className="text-center p-4">
            <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
            </svg>
            <span className="text-[0.65rem] opacity-60 tracking-wider">{alt}</span>
          </div>
        </div>
      )}
      {!error && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}
