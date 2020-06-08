import React from 'react'
import Navigation from '../Navigation/Navigation.jsx'
import Footer from '../Footer/Footer.jsx'
import Ideas from '../Ideas/Ideas.jsx'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"


const App = () => (
  <div>
    <Navigation />
    <BrowserRouter>
      <Route path="/" exact>
        <Redirect to="/projects" />
      </Route>
      <Route path="/ideas">
        <Ideas />
      </Route>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
