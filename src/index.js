import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {faEnvelope, faHandshake, faArrowLeft, faArrowRight, 
  faTimes, faLink, faAdjust, faSpinner, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons' 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

library.add(faEnvelope, faLinkedin, faGithub, faHandshake, faArrowLeft, 
  faArrowRight, faTimes, faLink, faAdjust, faSpinner, faFilePdf)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
