import { animalImageMiddleware } from '../assets/animalImage';

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;

// Selectors
export const getAllAnimals = (state) => {
  return Object.keys(state)
    .map(animalId => state[animalId])
    .map(animalImageMiddleware);
};

export const getAnimalByDifficultyLevel = (state, level) => {
  return getAllAnimals.filter(animalId => (state[animalId].difficulty === level));
}

export const getAnimalById = (state, animalId) => {
  return animalImageMiddleware(state[animalId]);
};