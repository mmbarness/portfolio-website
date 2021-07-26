//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/top-level-stuff/root';
import configureStore from './store/store';
// import "core-js/stable";
import "regenerator-runtime/runtime";

document.addEventListener('DOMContentLoaded', () => {
    let store;
    store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
