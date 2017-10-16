import React from 'react';
import { NavLink } from "react-router-dom";
import glamorous from 'glamorous'

import Image from '../../atoms/Image';

const StyledGrid = glamorous.ul({
  display: 'flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
});

const Grid = ({ list, uriPrefix = '/' }) =>
  <StyledGrid>{list.map(item =>
    <li>
      <NavLink
        to={`${uriPrefix}/${item.itemId}`}>
        <Image image={item.image} alt={item.name} />
      </NavLink>
    </li>
  )}</StyledGrid>

export default Grid;