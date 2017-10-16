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
  return Object.keys(state).map(animalId => state[animalId]);
};

export const getAnimalByDifficultyLevel = (state, level) => {
  return Object.keys(state)
    .filter(animalId => (state[animalId].difficulty === level))
    .map(animalId => state[animalId]);
}

export const getAnimalById = (state, animalId) => {
  return state[animalId];
};