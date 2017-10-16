import React from 'react';
import glamorous from 'glamorous'

import Image from '../../atoms/Image';

const SpellCard = glamorous.div({
  margin: 'auto',
  width: '500px',
  minHeight: '500px',

  '& > img': {
    width: '100%',
    height: '100%',
  }
});

const Name = glamorous.h2({
  fontSize: '80px',
  textAlign: 'center',
  fontWeight: 'normal',
});

const AnimalSpell = ({ item: { name, image } }) =>
  <SpellCard>
    <Image image={image} alt={name} />
    <Name>{name}</Name>
  </SpellCard>

export default AnimalSpell;