import React, { Component } from 'react'
import Book from './Book.js'
import * as Util from './Util'

class Bookshelf extends Component {
  render() {
    const { category, books, onBookUpdate } = this.props
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{Util.camelCaseToTitleCase(category)}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              { books.map((book) => (
                <li key={book.id}>
                  <Book key={book.id} metadata={book} onBookUpdate={onBookUpdate} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf
