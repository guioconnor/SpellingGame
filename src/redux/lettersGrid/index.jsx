const initialState = {
  phrase: [],
  canPlayBanana: false,
}

// Action Types
const ADD_LETTER = 'ADD_LETTER';
const REMOVE_LAST_LETTER = 'REMOVE_LAST_LETTER';
const CLEAR_PHRASE = 'CLEAR_PHRASE';
const ACTIVATE_BANANA = 'ACTIVATE_BANANA';

// Action Creators
export const addLetter = (letter) => {
  return {
    type: ADD_LETTER,
    letter,
  }
}

export const removeLastLetter = () => {
  return {
    type: REMOVE_LAST_LETTER,
  }
}

export const clearPhrase = () => {
  return {
    type: CLEAR_PHRASE,
  }
}

export const activateBanana = () => {
  return {
    type: ACTIVATE_BANANA,
  }
}

// reducer
const lettersGrid = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        phrase: [...state.phrase, action.letter],
        canPlayBanana: false,
      }
    case REMOVE_LAST_LETTER:
      return {
        ...state,
        phrase: [...state.phrase.slice(0, state.phrase.length - 1)],
        canPlayBanana: false,
      }
    case CLEAR_PHRASE:
      return {
        ...state,
        phrase: [],
        canPlayBanana: false,
      }
    case ACTIVATE_BANANA:
      return {
        ...state,
        canPlayBanana: true,
      }
    default:
      return state;
  }
}

export default lettersGrid;

// selectors

export const getPhrase = state => {
  // debugger;
  return state.phrase
};
export const getCanPlayBanana = state => state.canPlayBanana;