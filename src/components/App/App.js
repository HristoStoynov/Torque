import React from 'react'
import './App.css'
import Navigation from '../Navigation/Navigation.jsx'
import Footer from '../Footer/Footer.jsx'
import Projects from '../Projects/Projects.jsx'
import Ideas from '../Ideas/Ideas.jsx'
import Login from '../Login/Login.jsx'
import Register from '../Register/Register.jsx'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"


const App = () => (
  <div className="page-container">
    <div className="content-wrap">
      <Navigation />
      <BrowserRouter>
        <Route path="/" exact>
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/ideas">
          <Ideas />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default App;
