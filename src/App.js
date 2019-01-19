import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import Search from './components/Search'
import MyShelves from './components/MyShelves'

class BooksApp extends React.Component {
  //state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: true
  //  }

  constructor(props) {
    super(props);

    this.state = {
      allBooks: [],
    };
    this.updateAllBooks=this.updateAllBooks.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        allBooks: books
      })
    });            
  }

  updateAllBooks(id, shelf){
    let book = this.findBook(id)
    book.shelf = shelf
    let newList = this.state.allBooks.filter(l => l.id !== id)  
    newList.push( book )    
    this.setState({ allBooks: newList})
    BooksAPI.update(book, shelf)          
  }

  findBook = (id) => {
    return this.state.allBooks.filter((l) => l.id === id)[0]
  };

  render() {
    return (
      <div className="app">        
        <Route path="/busca" render={() => (
          <Search bookList={this.state.allBooks} onChangeBook={this.updateAllBooks} />  
        )}/>
        <Route exact path="/" render={() => (
          <MyShelves bookList={this.state.allBooks} onChangeBook={this.updateAllBooks} />  
        )}/>
      </div>
    )
  }
}

export default BooksApp
