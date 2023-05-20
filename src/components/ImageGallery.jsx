import React from 'react';
import { Image } from 'react-image';

const ImageGallery = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          loader={<div>Loading...</div>}
          unloader={<div>Failed to load image.</div>}
        />
      ))}
    </div>
  );
};

export default ImageGallery;