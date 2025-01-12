/* eslint-disable @next/next/no-img-element */
'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export const ImageContainer: FC<ImageProps> = (props) => {
  const { src, alt = '', className = '', height = 450, width = 300 } = props;

  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className={`bg-stone-900 overflow-hidden ${isComplete ? 'animate-none' : 'animate-pulse'} ${className}`}>
      <Image
        className={`duration-300 object-cover h-full w-full ${
          isComplete ? 'opacity-100 blur-none' : 'opacity-0 blur-lg'
        } `}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsComplete(true)}
        loading='lazy'
        draggable={false}
      />
    </div>
  );
};
