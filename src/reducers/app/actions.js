import * as CONST from './constants';

export const appSetTheme = (theme) => ({
  type: CONST.APP_SET_THEME,
  payload: {
    color: theme,
  },
});
