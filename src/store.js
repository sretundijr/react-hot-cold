
import { createStore } from 'redux';
import { guessGameReducer } from './reducers';

export default createStore(guessGameReducer);