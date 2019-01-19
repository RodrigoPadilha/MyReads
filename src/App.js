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

  updateAllBooks(id, shelf){
    var book = this.findBook(id)
    book = {...book, shelf: shelf}

    let newList = this.state.allBooks.filter(l => l.id !== id)  
    newList.push( book )    
        
    BooksAPI.update(book, shelf)         
    this.setState({ allBooks: newList})
    
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
