import React from 'react';
import _ from 'lodash';
import glamorous from 'glamorous';
import Letter, { speakTypes } from '../../atoms/Letter';
import Image from '../../atoms/Image';
import { speakSynth } from '../../../lib/speak';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const Controls = glamorous.div({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '30px',
  display: 'flex',
  justifyContent: 'space-evenly',
  background: 'rgba(10, 20, 20, .8)',
});

const Button = glamorous.button({
  margin: 0,
  padding: '10px 30px',
  background: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '5px',
  border: 'none',
  fontSize: '50px',
  display: 'inline-block',
  outline: 'none',
})

const Phrase = glamorous.ul({
  background: 'rgba(0,0,0,0.05)',
  margin: 'auto 30px',
  borderRadius: '5px',
  minHeight: '220px',
  padding: '50px 100px',
  display: 'flex',
  flexWrap: 'nowrap',
  listStyleType: 'none',
  justifyContent: 'center',
})

const StyledImage = glamorous(Image)({
  background: 'rgba(255, 255, 255, .5)',
  borderRadius: '5px',
})

const List = glamorous.ul({
  margin: 0,
  padding: '50px 100px',
  display: 'flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
  justifyContent: 'space-evenly',
});

const Item = glamorous.li({
  borderRadius: '5px',
  margin: '10px',
});

const Grid = ({
  matchedAnimal,
  addLetter,
  clearPhrase,
  phrase,
  activateBanana,
  canPlayBanana,
  removeLastLetter,
}) => {
  return (
    <div>
      <List>
        {letters.map(letter =>
          <Item key={letter}>
            <Letter speakType={speakTypes.PHONIC} onClick={addLetter} speakOnHover>
              {letter}
            </Letter>
          </Item>
        )}
      </List>
      <Phrase>
        {phrase.map(letter =>
          <Item key={letter}>
            <Letter speakType={speakTypes.PHONIC}>
              {letter}
            </Letter>
          </Item>
        )}
        {matchedAnimal &&
          <Item key="animal">
            <StyledImage image={matchedAnimal.image} alt={matchedAnimal.name} />
          </Item>}
      </Phrase>
      <Controls>
        <Button
          onClick={() => {
            clearPhrase();
          }}>❌</Button>
        <Button
          onClick={() => {
            speakSynth(phrase.join(''));
            activateBanana();
          }}>🗣</Button>

        {canPlayBanana && <Button
          onClick={() => {
            const p = phrase.join('');
            let want = ' wants ' + _.get(matchedAnimal, 'food', 'food');

            if (p === 'luna') {
              want = ' wants bananas, sausages, broccoli and all the food';
            }
            speakSynth(p + want);
          }}>🍌</Button>}
        <Button
          onClick={() => {
            removeLastLetter();
          }}>⬅</Button>
      </Controls>
    </div >
  );
}

export default Grid;