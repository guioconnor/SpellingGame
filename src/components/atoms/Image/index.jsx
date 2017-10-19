import React from 'react';

const Image = ({ image, alt, ...props }) =>
  <img
    {...props}
    src={image}
    width={100}
    height={100}
    alt={alt}
    onClick={(e) => {
      const utterThis = new SpeechSynthesisUtterance(alt);
      speechSynthesis.speak(utterThis);
    }} />

export default Image;