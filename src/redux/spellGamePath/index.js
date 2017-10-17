const initialState = {
  path: [],
  position: null,
  completed: false,
}

// Action types
const INITIALIZE_PATH = 'INITIALIZE_PATH';
const ADVANCE_POSITION = 'ADVANCE_POSITION';
const RETURN_POSITION = 'RETURN_POSITION';

// Actions
export const initializePath = (path) => {
  return {
    type: INITIALIZE_PATH,
    path,
  };
}

export const advancePosition = () => {
  return {
    type: ADVANCE_POSITION,
  };
}

export const returnPosition = () => {
  return {
    type: RETURN_POSITION,
  };
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_PATH:
      return {
        ...state,
        path: action.path,
        position: action.path.length ? 0 : null,
        completed: false,
      };
    case ADVANCE_POSITION:
      if (state.position + 1 > state.path.length - 1) {
        return {
          ...state,
          completed: true,
        }
      }
      return {
        ...state,
        position: state.position + 1,
      };

    case RETURN_POSITION:
      if (state.position === 0) {
        return state;
      }
      return {
        ...state,
        position: state.position - 1,
      }

    default:
      return state;
  }
}

export default reducer;

// Selectors
export const getGamePath = (state) => state.path;

export const getCurrent = (state) => state.path[state.position];

export const getNext = (state) => state.path[state.position + 1];

export const getPrev = (state) => state.path[state.position - 1];

export const isCompleted = (state) => state.completed;

