import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import FooterContainer from './containers/Footer';
import HeaderContainer from './containers/Header';
import { Main } from './components/main';

export const App = () => {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <Main bg={'yellow'} obj={{id: 1, name: 'Ala'}} />
      <FooterContainer />
    </Provider>
  );
};

