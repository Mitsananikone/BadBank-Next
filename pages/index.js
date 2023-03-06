import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, HashRouter } from 'react-router-dom';
import NavBar from '../components/navbar';
import UserContext from '../components/context';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';

export default function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users: [{ name: 'Mit', email: 'Mitsananikone@gmail.com', password: 'secret', balance: 0 }] }}>
        <div className="container" style={{ padding: '20px' }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));
