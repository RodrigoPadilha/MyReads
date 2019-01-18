import React, { Component } from "react";
import { Link } from "react-router-dom";
//import * as BooksAPI from '../BooksAPI';
import BookShelf from "./BookShelf";

class MyShelves extends Component {
/*
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
*/
  render() {    
    return (            
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>Minhas Leituras</h1>
          </div>

          <div className="list-books-content">
            <div>
              <BookShelf id="currentlyReading" labelShelf="Lendo Agora" bookList={this.props.bookList} changeBook={this.props.onChangeBook}/>
              <BookShelf id="wantToRead"       labelShelf="Quero Ler"   bookList={this.props.bookList} changeBook={this.props.onChangeBook}/>
              <BookShelf id="read"             labelShelf="Finalizadas" bookList={this.props.bookList} changeBook={this.props.onChangeBook}/>                        
            </div>
          </div>

          <div className="open-search">
            <Link to="/busca">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyShelves;
