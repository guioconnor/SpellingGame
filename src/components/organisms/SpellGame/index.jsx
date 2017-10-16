import React from 'react';
import glamorous from 'glamorous'
import AnimalImage from '../../atoms/AnimalImage';

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

const AnimalSpell = ({ animal: { animalId, name } }) =>
  <SpellCard>
    <AnimalImage animalId={animalId} />
    <Name>{name}</Name>
  </SpellCard>

export default AnimalSpell;