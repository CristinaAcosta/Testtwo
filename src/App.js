import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Search from './compontents/Search';
import Save from './compontents/Save';
import Navbar from './compontents/Nav';
import Footer from './compontents/Footer';



function App() {
  return (
    <div>
      <Navbar/>
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Search}></Route>
        <Route exact path='/Save' component={Save}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}
export default App;

