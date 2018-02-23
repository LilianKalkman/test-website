import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './components/homepage';
import NotFound from './components/notfound';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './components/header';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const Root = () => {
  return (
      <BrowserRouter>
        <div>
        <Header/>
          <Match exactly pattern="/" component={Homepage}/>
          <Match pattern="/products" component={App}/>
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
