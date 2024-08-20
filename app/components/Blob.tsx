import React from 'react';

interface BlobProps {
  width?: string;
  height?: string;
  className?: string;
  pathData: string; // New prop for defining the shape
}

const Blob: React.FC<BlobProps> = ({
  width = '100%',
  height = '100%',
  className = '',
  pathData
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} /> {/* Deep Indigo */}
          <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} /> {/* Vibrant Purple */}
          <stop offset="100%" style={{ stopColor: '#ff3e8f', stopOpacity: 1 }} /> {/* Bright Pink */}
        </linearGradient>
        <filter id="blobShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#000" floodOpacity="0.2"/>
        </filter>
        <filter id="blobInsetShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer>
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feFlood floodColor="rgba(0, 0, 0, 0.2)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        fill="url(#blobGradient)"
        filter="url(#blobShadow) url(#blobInsetShadow)"
        d={pathData} // Use the path data prop
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;