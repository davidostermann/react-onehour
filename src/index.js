import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/** /
// Bizarre : React dev tools ne se lance pas
if (typeof window !== 'undefined') {
    window.React = React;
}
/**/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
