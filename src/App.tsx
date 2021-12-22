import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.global.css';

import { RecoilRoot } from 'recoil';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <HashRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </HashRouter>
    </RecoilRoot>
  );
};

export default App;
