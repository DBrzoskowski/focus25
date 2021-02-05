import React from 'react';
import ReactDOM from 'react-dom';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {BrowserRouter} from "react-router-dom";
import App from "./containers/App";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <App />
    </BrowserRouter>
  </DndProvider>,
  document.getElementById('root')
);
