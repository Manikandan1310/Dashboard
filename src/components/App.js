import React from 'react';
import './App.css'
import Sidebar from '../components/SideBar';
import Home from '../components/Home'
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {createBrowserHistory} from "history"
function App() {
  return (


    <div>
      <Router history={createBrowserHistory()}>
      <Sidebar/>
      </Router>
    </div>
  );
}

export default App;