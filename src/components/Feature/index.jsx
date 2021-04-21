import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Parrilla del día</h1>
      <p>Carne del día con salsa especial, acompañada de tus bebidas favoritas...</p>
      <FeatureButton>Ordenala Ya</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
