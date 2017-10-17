import { combineReducers } from "redux";

import animals from './animals';
import spellGamePath from './spellGamePath';

const rootReducer = combineReducers(
  animals,
  spellGamePath
);

export default rootReducer;