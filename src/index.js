import React, { StrictMode } from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <StrictMode>
    <App />
    </StrictMode>
    </Provider>

);



