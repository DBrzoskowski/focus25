import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {BrowserRouter} from "react-router-dom";
import App from "./containers/App";
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import rootSaga from './sagas';
import './css/index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
          <React.StrictMode>
          <Provider store={store}>
             <App />
          </Provider>
          </React.StrictMode>
    </BrowserRouter>
  </DndProvider>,
  document.getElementById('root')
);
reportWebVitals();