import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducers from './reducers/index'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


const store = createStore( reducers )

ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>
    ,
    document.getElementById('root'));


serviceWorker.unregister();
