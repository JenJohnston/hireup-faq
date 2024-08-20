import React from 'react';
import Blob from './Blob'; // Ensure this import is correct

interface BlobProps {
  pathData: string;
  width?: string;
  height?: string;
  className?: string;
}

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  blobs?: BlobProps[];
}

const Grid: React.FC<LayoutProps> = ({ title, children, blobs }) => {
  return (
    <div className="min-h-screen grid grid-cols-[auto_auto_auto] grid-rows-1 overflow-hidden">
      {/* Blob Section */}
      <div className="col-start-2 row-start-1 self-center grid grid-cols-3 grid-rows-2 justify-self-center">
        {blobs?.map((blob, index) => (
          <Blob
            key={index}
            width={blob.width || '600px'}
            height={blob.height || '600px'}
            className={blob.className || 'opacity-60'}
            pathData={blob.pathData}
          />
        ))}
      </div>
      {/* Content Section */}
      <div className="z-10 text-center col-start-2 row-start-1 self-center justify-self-center bg-slate-100 rounded-xl backdrop-filter backdrop-blur-md bg-opacity-20 p-12 sm:p-8 md:p-12 lg:p-16 xl:p-80">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Grid;