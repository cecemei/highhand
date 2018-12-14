
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import $ from 'jquery';

window.$ = $;
document.addEventListener('DOMContentLoaded', () => {

    let store = configureStore();
    window.store = store;
    window.__root_container = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, window.__root_container);

});
