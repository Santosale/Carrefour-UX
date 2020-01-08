import React from 'react';
import './assets/css/main.css'
import Header from './containers/Header';
import Main from './styledComponents/Main';
import Player from './containers/Player';
import { Action, createStore } from 'redux';
import {Provider} from 'react-redux';
import IGlobalState, { initialState } from './state/globalState';
import { HeaderActions, IFilterCollapseAction } from './actions/HeaderAction'

//Redux
const reducer = (state: IGlobalState = initialState, action: Action) => {
  switch (action.type) {
    case HeaderActions.HEADER_COLLAPSE:
      const collapsedAction = action as IFilterCollapseAction;
      return {...state, collapsed: collapsedAction.payload}
  }
  return state;
}
const store = createStore(reducer, initialState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
        <Player />
      </div>
    </Provider>
  );
}

export default App;
