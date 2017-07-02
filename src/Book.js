import React, { Component } from 'react'
import coverPlaceholder from './icons/no_thumbnail.jpg'

class Book extends Component {
  handleShelfSelection = (e) => {
    e.preventDefault()
    const shelf = e.target.value
    this.props.onBookUpdate(this.props.metadata, shelf)
  }

  render() {
    const { metadata } = this.props
    let thumbnail = coverPlaceholder
    if (metadata.imageLinks) {
      thumbnail = metadata.imageLinks.thumbnail
    }
    let authors = []
    if (metadata.authors) {
      authors = metadata.authors
    }
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url('${thumbnail}')` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleShelfSelection} value={metadata.shelf}>
              <option value="disabled" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{metadata.title}</div>
        { authors.map((author) => (
          <div className="book-authors" key={author}>{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
