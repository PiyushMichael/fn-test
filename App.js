import React from 'react';
import AppRoot from 'App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from 'Reducers';

const App = () => {
  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
    <>
      <Provider store={store}>
        <AppRoot />
      </Provider>
    </>
  );
};

export default App;
