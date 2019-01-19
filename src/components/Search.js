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
        /*
        console.log(listOfSearch)          
         listOfSearch.map( searchBook => (           
          this.props.bookList.map(myReadsBook => {
            if(searchBook.id === myReadsBook.id){              
              searchBook.shelf = myReadsBook.shelf
            }            
            return searchBook
          })          
        ))                      
        this.setState({ listOfSearch: listOfSearch });  
      */

        this.mergeLists(listOfSearch, this.props.bookList)
        this.setState({ listOfSearch: listOfSearch });    
      }).catch(error => {
        this.setState({ listOfSearch: [] });
      });   
    } else{
      this.setState({ listOfSearch: [] });
    }
    this.setState({ query: query });
  }
  mergeLists(listaOld, listaNew){    
    listaNew.forEach(newElement => {
      listaOld.forEach(oldElement => {
        if(oldElement.id === newElement.id){          
          oldElement.shelf = newElement.shelf                           
        }       
      })
    });
  }

  render() {    
   
    this.mergeLists(this.state.listOfSearch, this.props.bookList)    
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
                    id={book.id}
                    image={book.imageLinks && book.imageLinks.smallThumbnail}
                    title={book.title} 
                    author={book.author} 
                    shelf={book.shelf}
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