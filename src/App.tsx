import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.global.css';
import ProjectBoards from './components/ProjectBoards';

const Home: React.FC = () => {


  return (
    <div className="flex justify-center">

      <div className="min-h-screen flex overflow-x-scroll py-12">
      <ProjectBoards/>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
