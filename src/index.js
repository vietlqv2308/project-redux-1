import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// TODO learning redux-toolkit
// const store = configureStore({
//     reducer : rootReducer
// })

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

