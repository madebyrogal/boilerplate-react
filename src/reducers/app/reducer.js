import * as APP_CONST from './constants';

const appState = {
  theme: '#fff',
};

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case APP_CONST.APP_SET_THEME:
      return {
        ...state,
        theme: action.payload.color
      };
      
    default:
      return state;
  }
};
