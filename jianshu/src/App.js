import React from 'react';
import Header from './common/header'
import { GlobalStyle } from './style'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
        <GlobalStyle />
        <Header />
    </Provider>
  );
}

export default App;
