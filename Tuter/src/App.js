import React from 'react';
import './Assets/scss/_bootstrap-overrides.scss';
import './Assets/scss/_callout.scss';
import './Assets/scss/_footer.scss';
import './Assets/scss/_global.scss';
import './Assets/scss/_masthead.scss';
import './Assets/scss/_mixins.scss';
import './Assets/scss/_portfolio.scss';
import './Assets/scss/_services.scss';
import './Assets/scss/_sidebar.scss';
import './Assets/scss/_variables.scss';
import './Assets/scss/stylish-portfolio.scss';
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
        {/* <Switch>
          <Route exact path='/' component={Admin}/>
        </Switch> */}
      </Router>
      
    </div>
  );
}

export default App;
