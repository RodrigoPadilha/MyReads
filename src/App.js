import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import Search from './components/Search'
import MyShelves from './components/MyShelves'

class BooksApp extends React.Component {

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

  updateAllBooks(book, shelf){
    let newList = this.state.allBooks.filter(l => l.id !== book.id)  
    if(this.findBook(book.id))
      book = {...book, shelf: shelf}     
    newList.push( {...book, shelf: shelf} )      
    this.setState({ allBooks: newList})        
    BooksAPI.update(book, shelf)                 
  }

  findBook = (id) => {
    return this.state.allBooks.find((l) => l.id === id)          
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
