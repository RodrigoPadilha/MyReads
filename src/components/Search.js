import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';

import Book from "./Book";

class Search extends Component {

  constructor(){
    super();
    this.state = {
      query: "",    
      listOfBooks:[]
    };
  }

  updateList = (query) => {
    if(query){
      BooksAPI.search(query).then(list => {       
        this.setState({ listOfBooks: list });       
      }).catch(error => {
        this.setState({ listOfBooks: [] });
      });   
    } else{
      this.setState({ listOfBooks: [] });
    }
    this.setState({ query: query });
  };

  clearQuery = () => this.updateList("");

  updateBook(id, shelf){
    let book = BooksAPI.get(id)
    console.log(book)
    BooksAPI.update(book, shelf)
  }

  render() {    
    console.log("Estado..: ", this.state.listOfBooks)
    return (      
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateList(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.listOfBooks.length > 0 && 
                this.state.listOfBooks.map(book => (
                  <Book 
                    key={book.id} 
                    id={book.id}
                    image={book.imageLinks.thumbnail} 
                    title={book.title} 
                    author={book.author} 
                    shelf={book.shelf}
                    onChangeShelf={this.updateBook} />
                ))
                }
            </ol>

          </div>
        </div>
      </div>
    );
  }
}

export default Search;
