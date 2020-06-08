import React from 'react'
import './App.css'
import Navigation from '../Navigation/Navigation.jsx'
import Footer from '../Footer/Footer.jsx'
import Ideas from '../Ideas/Ideas.jsx'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"


const App = () => (
  <div className="page-container">
    <div className="content-wrap">
      <Navigation />
      <BrowserRouter>
        <Route path="/" exact>
          <Redirect to="/projects" />
        </Route>
        <Route path="/ideas">
          <Ideas />
        </Route>
        <Route path="/login">
          <Ideas />
        </Route>
        <Route path="/register">
          <Ideas />
        </Route>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default App;
