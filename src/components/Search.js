import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';

import Book from "./Book";

class Search extends Component {

  constructor(){
    super();

    this.state = {
      query: "",    
      listOfSearch:[]
    };
  }

  updateList = (query) => {
    if(query){      
      BooksAPI.search(query).then((listOfSearch) => {   
        listOfSearch.map( searchBook => {
          let book = this.props.bookList.find(myReadsBook => { return myReadsBook.id === searchBook.id})          
          searchBook.shelf = 'none' 
          if(book)
            searchBook.shelf = book.shelf

          return searchBook
        })
        
        this.setState({ listOfSearch: listOfSearch });      
      }).catch(error => {
        this.setState({ listOfSearch: [] });
      });   
    } else{
      this.setState({ listOfSearch: [] });
    }
    this.setState({ query: query });
  }

  render() {    
   
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
              {                
                this.state.listOfSearch.map(book => (                  
                  <Book 
                    key={book.id} 
                    book={book}
                    onChangeShelf={this.props.onChangeBook} />
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