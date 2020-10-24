import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = document.getElementById('root')
function renderToDOM() {
    if (root !== null) {
        ReactDOM.render(<App />, root)
    }
}
renderToDOM();
export {renderToDOM};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
