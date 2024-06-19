// components/ImageHover.js
'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ImageHover = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(image, {
        scaleX: 1.5,  // Stretch horizontally by 1.5 times
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scaleX: 1,  // Back to original scale
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    // Event listeners
    image.addEventListener('mouseenter', handleMouseEnter);
    image.addEventListener('mouseleave', handleMouseLeave);

    // Clean up listeners
    return () => {
      image.removeEventListener('mouseenter', handleMouseEnter);
      image.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="image-container">
      <img
        ref={imageRef}
        src="/asserts/images/canada.png/"
        alt="Hover Image"
        className="hover-image"
      />
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          width: 300px; /* Adjust as per your design */
          height: 200px; /* Adjust as per your design */
        }
        .hover-image {
          display: block;
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ImageHover;
