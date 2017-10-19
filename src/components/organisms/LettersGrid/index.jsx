import React from 'react';
import glamorous from 'glamorous';
import Letter, { speakTypes } from '../../atoms/Letter';
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

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phrase: [],
      canPlayBanana: false,
    }
  }

  onClick = (letter) => {
    this.setState({
      phrase: [...this.state.phrase, letter],
      canPlayBanana: false,
    });
  }

  render() {
    return (
      <div>
        <List>
          {letters.map(letter =>
            <Item key={letter}>
              <Letter speak={speakTypes.PHONIC} onClick={this.onClick}>
                {letter}
              </Letter>
            </Item>
          )}
        </List>
        <Phrase>
          {this.state.phrase.map(letter =>
            <Item key={letter}>
              <Letter speak={speakTypes.PHONIC} onClick={this.onClick}>
                {letter}
              </Letter>
            </Item>
          )}
        </Phrase>
        <Controls>
          <Button
            onClick={() => {
              this.setState({
                phrase: [],
              })
            }}>❌</Button>
          <Button
            onClick={() => {
              speakSynth(this.state.phrase.join(''));
              this.setState({
                canPlayBanana: true,
              });
            }}>🗣</Button>

          {this.state.canPlayBanana && <Button
            onClick={() => {
              const phrase = this.state.phrase.join('');
              let want = ' wants a banana';

              if (phrase === 'luna') {
                want = ' wants all the food';
              }
              speakSynth(this.state.phrase.join('') + want);
            }}>🍌</Button>}
          <Button
            onClick={() => {
              this.setState({
                phrase: [...this.state.phrase.slice(0, this.state.phrase.length - 1)],
                canPlayBanana: false,
              });
            }}>⬅</Button>
        </Controls>
      </div>
    );
  }
}


export default Grid;