import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route  path='/search' render={() => (
            <SearchBooks />
          )}/>
          <Route exact path='/' render={() => (
              <ListBooks />
            )}/>
          </div>
        )
      }
}

export default BooksApp
