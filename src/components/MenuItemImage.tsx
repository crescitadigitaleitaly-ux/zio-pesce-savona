'use client';
import { useState } from 'react';
import Image from 'next/image';

interface MenuItemImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MenuItemImage({ src, alt, className = '' }: MenuItemImageProps) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-ocean-800 w-full h-full ${className}`}>
      {error ? (
        <div className="img-placeholder absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
            </svg>
            <span className="text-[0.65rem] opacity-60 tracking-wider block leading-tight">{alt}</span>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          onError={() => setError(true)}
          unoptimized={src.startsWith('http')} // prevent optimization errors for external placeholders if any
        />
      )}
    </div>
  );
}
