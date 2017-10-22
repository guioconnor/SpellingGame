import { combineReducers } from "redux";

import animals from './animals';
import spellGamePath from './spellGamePath';
import lettersGrid from './lettersGrid';

export default combineReducers({
  animals,
  spellGamePath,
  lettersGrid,
});

