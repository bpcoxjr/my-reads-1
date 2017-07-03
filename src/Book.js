import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import coverPlaceholder from './icons/no_thumbnail.jpg'

class Book extends Component {
  state = {
    showModal: false
  }

  handleShelfSelection = (e) => {
    e.preventDefault()
    const shelf = e.target.value
    this.props.onBookUpdate(this.props.metadata, shelf)
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  showModal = () => {
    this.setState({showModal: true})
  }

  render() {
    const { metadata } = this.props

    let thumbnail = coverPlaceholder
    if (metadata.imageLinks) {
      thumbnail = metadata.imageLinks.thumbnail
    }
    let authors = ["Unknown"]
    if (metadata.authors) {
      authors = metadata.authors
    }
    let publishedDate = "Unknown"
    if (metadata.publishedDate) {
      publishedDate = metadata.publishedDate
    }
    let publisher = "Unknown"
    if (metadata.publisher) {
      publisher = metadata.publisher
    }
    let description = "Unknown"
    if (metadata.description) {
      description = metadata.description
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" onClick={this.showModal} style={{ width: 128, height: 188, backgroundImage: `url('${thumbnail}')` }}>
            <div className="overlay">
              <div className="info"></div>
            </div>
          </div>
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
        <Modal show={this.state.showModal} onHide={this.closeModal} bsSize="lg">
          <Modal.Header closeButton>
              <Modal.Title>{metadata.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body bsClass="modal-body">
            <div className="book-cover" onClick={this.showModal} style={{ width: 128, height: 188, backgroundImage: `url('${thumbnail}')` }}></div>
            <div className="details">
              <h4>Release Date</h4>
              <p>{metadata.publishedDate}</p>
              <h4>Author(s)</h4>
              { authors.map((author) => (
                <p key={author}>{author}</p>
              ))}
              <h4>Publisher</h4>
              <p>{metadata.publisher}</p>
              <h4>Description</h4>
              <p>{metadata.description}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Book
