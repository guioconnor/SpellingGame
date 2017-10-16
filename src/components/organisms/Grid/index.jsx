import React from 'react';
import { NavLink } from "react-router-dom";
import glamorous from 'glamorous'

import AnimalImage from '../../atoms/AnimalImage';

const AnimalGrid = glamorous.ul({
  display: 'flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
});

const AnimalsGrid = ({ animalsList }) =>
  <AnimalGrid>{animalsList.map(animal =>
    <li>
      <NavLink
        to={`/animals/${animal.animalId}`}>
        {animal.image}
      </NavLink>
    </li>
  )}</AnimalGrid>

export default AnimalsGrid;