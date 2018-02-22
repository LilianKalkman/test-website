import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './components/homepage';
import NotFound from './components/notfound';
import { BrowserRouter, Match, Miss } from 'react-router';


const Root = () => {
  return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Homepage}/>
          <Match pattern="/products" component={App}/>
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
