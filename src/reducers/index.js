import { combineReducers } from 'redux';
import { appReducer } from './app/reducer';

export const rootReducers = combineReducers({
  appReducer,
});
