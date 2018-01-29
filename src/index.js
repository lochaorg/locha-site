import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Locha from './components/Locha.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Locha />, document.getElementById('locha-main'));
registerServiceWorker();
