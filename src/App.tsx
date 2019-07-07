import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div>menu
          <div>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
          </div>
        </div>
        <Switch>
          <Route path={'/'} component={Home}/>
          <Route path={'/about'} component={About}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
