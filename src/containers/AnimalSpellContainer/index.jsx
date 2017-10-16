import { connect } from 'react-redux';
import { getAnimalById } from '../../redux';

import SpellGame from '../../components/organisms/SpellGame';

const mapStateToProps = (state, { animalId }) => {
  return {
    item: {
      ...getAnimalById(state, animalId),
      itemId: animalId,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SpellGame);