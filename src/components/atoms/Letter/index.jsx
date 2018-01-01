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

const Letter = ({ speakType = speakTypes.NONE, children, onClick = () => { }, speakOnHover }) => {
  let speak;

  switch (speakType) {
    case 'PHONIC':
      speak = speakPhonic;
      break;
    case 'SYNTH':
      speak = speakSynth;
      break;
    default:
      speak = () => { };
  }

  // if (speak) {
  //   onClick = () => {
  //     const letterPlayer = document.getElementById(children.toUpperCase());
  //     if (letterPlayer) { letterPlayer.play() }
  //   }
  // }

  return <StyledLetter
    onClick={() => {
      speak(children);
      onClick(children);
    }}
    onMouseOver={() => {
      speakOnHover && speak(children);
    }}>
    {children}
  </StyledLetter >
}

export default Letter;