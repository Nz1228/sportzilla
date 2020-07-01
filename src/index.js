import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './store/reducer'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(reducer, undefined, composedEnhancers);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

//ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root')
//);

//ReactDOM.render(
//    <React.StrictMode>
//        <Provider store={store}>
//            <App />
//        </Provider>
//    </React.StrictMode>,
//    document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





