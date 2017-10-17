import { connect } from 'react-redux';
import { getAnimalById } from '../../redux/animals';

import SpellGame from '../../components/organisms/SpellGame';

const mapStateToProps = (state, { animalId }) => {
  return {
    item: {
      ...getAnimalById(state.animals, animalId),
      itemId: animalId,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SpellGame);