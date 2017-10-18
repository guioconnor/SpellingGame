import React from 'react';
import { NavLink } from "react-router-dom";
import glamorous from 'glamorous'

import Image from '../../atoms/Image';

const StyledGrid = glamorous.ul({
  margin: 0,
  padding: '50px 100px',
  display: 'flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
  justifyContent: 'space-evenly',
});

const Item = glamorous.li({
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  margin: '10px',
  background: 'rgba(255, 255, 255, .4)',
  boxShadow: '2px 2px 2px rgba(0,0,0,0.15)',
  '&:hover': {
    background: '#d4d8d0',
  },
});

const Grid = ({ list, uriPrefix = '/' }) =>
  <StyledGrid>{list.map(item =>
    <Item>
      <NavLink
        to={`${uriPrefix}/${item.itemId}`}>
        <Image image={item.image} alt={item.name} />
      </NavLink>
    </Item>
  )}</StyledGrid>

export default Grid;