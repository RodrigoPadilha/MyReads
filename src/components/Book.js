import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {

  static propTypes = {
    book: PropTypes.object,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {  
    const { book } = this.props;
    //console.log(book.title)
    return (      
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"            
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select 
            name={book.id} 
            value={book.shelf} 
            onChange={(e) => {              
              const { value } = e.target;
              this.props.onChangeShelf(book, value)
            }}> 
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    );
  }
}

export default Book;
