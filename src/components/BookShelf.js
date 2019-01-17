import React, { Component } from "react";
import PropTypes from "prop-types";
import escapeRegExp from 'escape-string-regexp';

import Book from "./Book";

class BookShelf extends Component {


constructor(){
  super()
/*
  this.state = {
    booksByShelf: [],
  };
*/
  var booksByShelf = [];
}
  
static propTypes = {
  bookList: PropTypes.array.isRequired,
  changeBook: PropTypes.func.isRequired
};

separaLista = (lista, match) => {
  return lista.filter((book) => match.test(book.shelf))
}
                  
changeShelf(name, shelf){
  console.log(name)
  console.log(shelf)
}

componentWillReceiveProps(){
  console.log("Separou3: ", this.booksByShelf)
}

  render() {    
    this.booksByShelf = this.separaLista(this.props.bookList,new RegExp(escapeRegExp(this.props.id),''))

    return (        
      
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.labelShelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.booksByShelf.map(book => (
              <Book 
                key={book.id} 
                id={book.id}
                image={book.imageLinks.thumbnail} 
                title={book.title} 
                author={book.author} 
                shelf={book.shelf}
                onChangeShelf={this.changeShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
