import React from 'react';
import glamorous from 'glamorous'

import Image from '../../atoms/Image';
import Letter from '../../atoms/Letter';

const SpellCard = glamorous.div({
  background: 'rgba(255, 255, 255, .2)',
  margin: '50px 100px',
  boxShadow: '2px 2px 4px rgba(0,0,0,.10)',
  borderRadius: '10px',
  padding: '50px',
  minHeight: '500px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '& > img': {
    marginBottom: '40px',
    width: '100%',
    maxWidth: '500px',
    height: 'calc(100vh - 360px)',
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
    const { name } = this.props.item;

    // const utterThis = new SpeechSynthesisUtterance(name);
    // speechSynthesis.speak(utterThis)

    setTimeout(() => {
      const interval = setInterval(() => {
        const { letters } = this.state;
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
    }, 2000)

  }

  render() {
    const { image, name } = this.props.item;
    const { letters } = this.state;
    return (
      <SpellCard>
        <Image image={image} alt={name} />
        <Name>{letters.map((letter, index) => <Letter key={`pos${index}`}>{letter}</Letter>)}</Name>
      </SpellCard>
    );
  };
};

export default SpellContainer;