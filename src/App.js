import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Works from './pages/works/works.component'
import About from './pages/about/about.component'

import './App.styles.css'

const App = () => (
  <div className='container'> 
    <Header/>
    <Switch>
      <Route exact path='/' component={Works} />
      <Route exact path='/about' component={About} />
    </Switch>
    <Footer/>
  </div>
)

export default App