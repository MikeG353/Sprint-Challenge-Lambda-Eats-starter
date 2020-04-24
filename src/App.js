import React from "react";
import { Route, Switch, Router, Link } from 'react-router-dom'
import Form from './Form'

const App = () => {
  return (
    <div>
      {/* <Header > will put the below inside a header onject since it doesnt change in the wireframe*/}
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
          <Form></Form>
          
        </Route>
        <Route path='/'>
          

            <div className={'hero-image container'}>
              <img src={'./image/Pizza.jpg'}/>
              <div className={"centered"}>Your favorite food, delivered while coding</div>
              <button>Click!</button> {/* this button will lead to the form */}
            </div>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
