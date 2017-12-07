
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {


    window.__root_container = document.getElementById('root');
    ReactDOM.render(<Root/>, window.__root_container);

});
