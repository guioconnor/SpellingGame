import { connect } from 'react-redux';
import { getAnimalById } from '../../redux';

import AnimalSpellGame from '../../components/organisms/SpellGame';

const mapStateToProps = (state, { animalId }) => {
  return {
    animal: getAnimalById(state, animalId),
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalSpellGame);