import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter >
        <div>
           <App/>
         </div>
    </BrowserRouter>
   
    ,
    document.getElementById('root')
);
registerServiceWorker();
