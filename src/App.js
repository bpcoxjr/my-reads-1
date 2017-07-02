import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: []
  }

	componentDidMount() {
		this.getAllBooks()
	}

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
			this.setState({books})
      this.reconcileSearch(this.state.searchResults, books)
		})
  }

  reconcileSearch = (searchResults, books) => {
    searchResults = searchResults.filter((result) => {
      for (let book of books) {
        if (book.id === result.id) {
          return false
        }
      }
      return true
    })
    this.setState({searchResults})
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks()
    })
  }

  performBookSearch = (query) => {
    if (query === '') {
      this.setState({searchResults: []})
      return
    }
    BooksAPI.search(query, 20).then((searchResults) => {
      if (searchResults instanceof Array) {
        this.reconcileSearch(searchResults, this.state.books)
      } else {
        this.setState({searchResults: []})
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route  path='/search' render={({ history }) => (
            <SearchBooks
              books={this.state.searchResults}
              onSearch={(query) => {
                this.performBookSearch(query)
              }}
              onBookUpdate={(book, shelf) => {
                this.updateBook(book, shelf)
            }}/>
          )}/>
        <Route exact path='/' render={() => (
              <ListBooks
                books={this.state.books}
                onBookUpdate={(book, shelf) => {
                  this.updateBook(book, shelf)
                }}/>
            )}/>
          </div>
        )
      }
}

export default BooksApp
