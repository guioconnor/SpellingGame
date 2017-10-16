import React from 'react';

const Animal = ({ image, alt }) =>
  <img src={image} width={100} height={100} alt={alt} />

export default Animal;