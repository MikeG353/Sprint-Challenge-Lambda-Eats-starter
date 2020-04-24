import React from "react";
import { Route, Switch, Router, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Header > */}
        <div className={'header container'}>
          <h1>Lambda Eats</h1>
          <div className={'header-buttons'}>
            <Link to='/'><button id={'home-button'}>Home</button></Link>
            <button id={'help-button'}>Help</button>
          </div>
        </div>
      {/* </Header> */}
      <Switch>
        <Route path='/Pizza'>
          
        </Route>
        <Route path='/'>
          

            <div className={'hero-image container'}>
              <img src={'./Assets/Pizza'}/>
              <div className={"centered"}>Your favorite food, delivered while coding</div>
              <button>Click!</button>
            </div>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
