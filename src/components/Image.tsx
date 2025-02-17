/* eslint-disable @next/next/no-img-element */
'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import { baseUrlProxy } from '@/constants';
type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export const ImageContainer: FC<ImageProps> = (props) => {
  const { src, alt = '', className = '', height = 450, width = 300 } = props;
  const [loading, setLoading] = useState(true);
  return (
    <div className={`bg-stone-900 overflow-hidden ${className}`}>
      <Image
        className={`duration-300 object-cover h-full w-full ${loading ? 'opacity-0' : 'opacity-100'}`}
        src={`${baseUrlProxy}${src}`}
        alt={alt}
        width={width}
        height={height}
        loading='lazy'
        draggable={false}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};
