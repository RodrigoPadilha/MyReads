import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class MyShelves extends Component {

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
