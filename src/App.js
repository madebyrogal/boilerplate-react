import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import FooterContainer from './containers/Footer';
import HeaderContainer from './containers/Header';

export const App = () => {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <FooterContainer />
    </Provider>
  );
};

