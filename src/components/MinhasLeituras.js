import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import BookShelf from "./BookShelf";

class MinhasLeituras extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allBooks: [],
    };
//    this.trocaDeEstande=this.trocaDeEstande.bind(this);
}

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        allBooks: books
      })
    });            
  }

  updateAllBooks(book){
    //Recebe livro ou listaAtualizada
  }

  removerLeiturasAtuais = (livro) => {
    this.setState(state => ({
      leiturasAtuais: state.leiturasAtuais.filter(l => l.id !== livro.id)
    }));
    //BooksAPI.remove(livro)
  }
/*  console.log(this.state.livros.map((livro) => (
      const match = new RegExp(escapeRegExp(livro.shelf),'i')
        livro.title + " : " + livro.shelf      
    )))*/

  render() {    
    return (            
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>
              <BookShelf id="currentlyReading" labelShelf="Lendo Agora" bookList={this.state.allBooks} changeBook={this.updateAllBooks}/>
              <BookShelf id="wantToRead"       labelShelf="Quero Ler"   bookList={this.state.allBooks} changeBook={this.updateAllBooks}/>
              <BookShelf id="read"             labelShelf="Finalizadas" bookList={this.state.allBooks} changeBook={this.updateAllBooks}/>                        
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

export default MinhasLeituras;
