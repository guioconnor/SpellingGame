import { connect } from 'react-redux';
import { getAllAnimals } from '../../redux/animals';
import Grid from '../../components/organisms/Grid';
import animalImage from '../../assets/animalImage';

const mapItem = (animal) => {
  return {
    ...animal,
    itemId: animal.animalId,
    image: animalImage(animal.animalId),
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: getAllAnimals(state.animals).map(animal => mapItem(animal)),
    uriPrefix: '/animals',
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);