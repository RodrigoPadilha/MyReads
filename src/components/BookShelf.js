import React, { Component } from "react";
import PropTypes from "prop-types";
import escapeRegExp from 'escape-string-regexp';

import Book from "./Book";

class BookShelf extends Component {
    
  static propTypes = {
    bookList2: PropTypes.array.isRequired,
    changeBook: PropTypes.func.isRequired
  };

  separaLista = (lista, match) => {
    return lista.filter((book) => match.test(book.shelf))
  }
                    
  render() {    
    //console.log("BookShelf 1..:",this.props.bookList2.length )
    let booksByShelf = this.separaLista(this.props.bookList2,new RegExp(escapeRegExp(this.props.id),''))  //Esse find só retorna 1?!?! parece que o shelf não está sendo preenchido automaticamente na primeira mudanca
    //console.log("BookShelf 2..:",booksByShelf.length )                                                    // ou seja, quando o livro é adicionado na biblioteca o livro não está recebendo o shelf

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
