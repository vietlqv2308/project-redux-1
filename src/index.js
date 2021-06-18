import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import myReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(myReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

