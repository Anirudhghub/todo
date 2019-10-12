import React from 'react';
import Rack from './Rack';
import  Loginpage from './Loginpage';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import './styles.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route path="/"  exact component={Loginpage}/>
          <Route path="/rack" component={Rack}/>

    </div>
    </BrowserRouter>
    );
}

export default App;
