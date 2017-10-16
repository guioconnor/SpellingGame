import React from 'react';
import { connect } from 'react-redux';
import { getAllAnimals } from '../../redux';
import AnimalImage from '../../components/atoms/AnimalImage';
import AnimalsGrid from '../../components/organisms/Grid';

const mapAnimal = (animal) => {
  return {
    ...animal,
    image: <AnimalImage animalId={animal.animalId} />,
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    animalsList: getAllAnimals(state).map(animal => mapAnimal(animal)),
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsGrid);