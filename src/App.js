import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Details from './pages/Details'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import $ from 'jquery'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    $(function () {
      $('.loader').delay(2000).fadeOut('slow')
      $('#overlayer').delay(2000).fadeOut('slow')
      setLoading(false)
    })
  }, [])
  return (
    <>
      <div id='overlayer'>
        <span className='loader'>
          <span className='loader-inner'></span>
        </span>
      </div>
      {!loading && (
        <div>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route exact path='/home'>
                <Home />
              </Route>
              <Route exact path='/details/:id'>
                <Details />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </>
  )
}

export default App
