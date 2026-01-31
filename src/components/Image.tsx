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
  return (
    <div className={`bg-stone-900 overflow-hidden ${className}`}>
      <Image
        className={`duration-300 object-cover h-full w-full `}
        src={`${src}`}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
};
