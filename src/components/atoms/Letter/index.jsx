import React from 'react';
import glamorous from 'glamorous';

import { speakPhonic, speakSynth } from '../../../lib/speak';

export const speakTypes = {
  NONE: 'NONE',
  PHONIC: 'PHONIC',
  SYNTH: 'SYNTH',
}

const StyledLetter = glamorous.span({
  borderRadius: '5px',
  display: 'inline-block',
  fontSize: '80px',
  width: '100px',
  height: '100px',
  lineHeight: '90px',
  verticalAlign: 'middle',
  background: 'rgba(255, 255, 255, .5)',
  textAlign: 'center',
  cursor: 'pointer',
});

const Letter = ({ speak = speakTypes.NONE, children, onClick = () => { } }) => {
  let customOnClick;

  switch (speak) {
    case 'PHONIC':
      customOnClick = () => {
        speakPhonic(children);
        onClick(children);
      }
      break;
    case 'SYNTH':
      customOnClick = () => {
        speakSynth(children);
        onClick(children);
      }
      break;
    default:
      customOnClick = () => {
        onClick(children);
      };
  }

  // if (speak) {
  //   onClick = () => {
  //     const letterPlayer = document.getElementById(children.toUpperCase());
  //     if (letterPlayer) { letterPlayer.play() }
  //   }
  // }

  return <StyledLetter
    onClick={customOnClick}>
    {children}
  </StyledLetter>
}

export default Letter;