import { connect } from 'react-redux';
import { getAnimalById } from '../../redux/animals';
import {
  addLetter,
  removeLastLetter,
  clearPhrase,
  activateBanana,
  getPhrase,
  getCanPlayBanana,
} from '../../redux/lettersGrid';

import LettersGrid from '../../components/organisms/LettersGrid';

const mapStateToProps = (state, ownProps) => {
  const canPlayBanana = getCanPlayBanana(state.lettersGrid);
  const phrase = getPhrase(state.lettersGrid);
  const matchedAnimal = getAnimalById(state.animals, phrase.join(''));

  return {
    ...ownProps,
    matchedAnimal,
    phrase,
    canPlayBanana,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addLetter: (letter) => dispatch(addLetter(letter)),
    removeLastLetter: () => dispatch(removeLastLetter()),
    clearPhrase: () => dispatch(clearPhrase()),
    activateBanana: () => dispatch(activateBanana()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LettersGrid);