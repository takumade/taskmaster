import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.global.css';

import { RecoilRoot } from 'recoil';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
