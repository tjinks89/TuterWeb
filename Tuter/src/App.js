import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './Pages/home';

function App() 
{
  return (
    <div className="Wrapper">
      <Router>
        <Switch>
          <Route exact path='/' component={home}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
