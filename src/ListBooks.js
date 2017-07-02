import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    const bookshelfCategories = ['currentlyReading', 'wantToRead', 'read']
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          { bookshelfCategories.map((category) => {
            let categorizedBooks = this.props.books.filter((book) => (book.shelf === category))
            return <Bookshelf key={category} books={categorizedBooks} onBookUpdate={this.props.onBookUpdate} category={category}/>
          })}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
