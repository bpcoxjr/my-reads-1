import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  componentWillUnmount() {
    // clears searchResults in App component's state
    this.props.onSearch('')
  }

  handleSearch = (e) => {
    let query = e.target.value
    this.setState({query})
    this.props.onSearch(query)
  }

  render() {
    const {books, onBookUpdate} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.handleSearch}
              value={this.state.query}
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { books.map((book) => {
              let key = Math.random().toString(36).substr(-8)
              return (<li key={key}>
                <Book key={key} metadata={book} onBookUpdate={onBookUpdate} />
              </li>)
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
