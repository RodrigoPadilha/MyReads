import React, { Component } from "react";
import PropTypes from "prop-types";
import escapeRegExp from 'escape-string-regexp';

import Book from "./Book";

class BookShelf extends Component {
    
  static propTypes = {
    bookList: PropTypes.array.isRequired,
    changeBook: PropTypes.func.isRequired
  };

  separaLista = (lista, match) => {
    return lista.filter((book) => match.test(book.shelf))
  }
                    
  render() {    
    let booksByShelf = this.separaLista(this.props.bookList,new RegExp(escapeRegExp(this.props.id),''))

    return (        
      
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.labelShelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksByShelf.map(book => (
              <Book 
                key={book.id} 
                book={book}              
                onChangeShelf={this.props.changeBook} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
