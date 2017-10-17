import React from 'react';
import glamorous from 'glamorous'

import Image from '../../atoms/Image';
import Letter from '../../atoms/Letter';
import Phonics from '../../atoms/Phonics';

const SpellCard = glamorous.div({
  margin: 'auto',
  padding: '50px',
  minHeight: '500px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '& > img': {
    marginBottom: '40px',
    width: '100%',
    maxWidth: '500px',
    height: '100%',
  }
});

const Name = glamorous.div({
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'nowrap',
  "& > span": {
    margin: '10px',
  }
});

class SpellContainer extends React.Component {
  static defaultProps = {
    item: {
      name: '',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      letters: Array(this.props.item.name.length).fill(''),
    }

    this.phonics = {};
  }

  componentDidMount = () => {
    let i = 0;

    const interval = setInterval(() => {
      const { letters } = this.state;
      const { name } = this.props.item;
      this.setState({
        letters: [
          ...name.split('').slice(0, i + 1),
          ...letters.slice(i + 1, letters.length),
        ],
      });
      // if (this.phonics[letters[i]]) {
      //   this.phonics[letters[i]].play();
      // }
      const letterPlayer = document.getElementById(name[i] && name[i].toUpperCase());
      if (letterPlayer) { letterPlayer.play() }
      if (++i > name.length) {
        clearInterval(interval);
      }
    }, 800);
  }

  render() {
    const { image, name } = this.props.item;
    const { letters } = this.state;
    return (
      <SpellCard>
        <Phonics
          mainRef={el => this.mainref = el}
          refA={el => this.phonics['A'] = el}
          refB={el => this.phonics['B'] = el}
          refC={el => this.phonics['C'] = el}
          refD={el => this.phonics['D'] = el}
          refE={el => this.phonics['E'] = el}
          refF={el => this.phonics['F'] = el}
          refG={el => this.phonics['G'] = el}
          refH={el => this.phonics['H'] = el}
          refI={el => this.phonics['I'] = el}
          refJ={el => this.phonics['J'] = el}
          refK={el => this.phonics['K'] = el}
          refL={el => this.phonics['L'] = el}
          refM={el => this.phonics['M'] = el}
          refN={el => this.phonics['N'] = el}
          refO={el => this.phonics['O'] = el}
          refP={el => this.phonics['P'] = el}
          refQ={el => this.phonics['Q'] = el}
          refR={el => this.phonics['R'] = el}
          refS={el => this.phonics['S'] = el}
          refT={el => this.phonics['T'] = el}
          refU={el => this.phonics['U'] = el}
          refV={el => this.phonics['V'] = el}
          refW={el => this.phonics['W'] = el}
          refX={el => this.phonics['X'] = el}
          refY={el => this.phonics['Y'] = el}
          refZ={el => this.phonics['Z'] = el}
        />
        <Image image={image} alt={name} />
        <Name>{letters.map((letter, index) => <Letter key={`pos${index}`}>{letter}</Letter>)}</Name>
      </SpellCard>
    );
  };
};

export default SpellContainer;