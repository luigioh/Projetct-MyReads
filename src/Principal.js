import React, {Component} from 'react';
import Books from './Books'
import {Link} from 'react-router-dom'


class Principal extends Component{
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books
                        .filter(book=> book.shelf === 'Currently Reading')
                        .map(book=> (
                            <li key={book.id}>
                                <Books
                                book={book}
                                mudarShelf={this.props.mudarShelf}
                                />
                            </li>
                        ))
                    }
                    
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books
                        .filter(book=> book.shelf === 'Want to Read')
                        .map(book=> (
                            <li key={book.id}>
                                <Books
                                book={book}
                                mudarShelf={this.props.mudarShelf}
                                />
                            </li>
                        ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books
                        .filter(book=> book.shelf === 'Read')
                        .map(book=> (
                            <li key={book.id}>
                                <Books
                                book={book}
                                mudarShelf={this.props.mudarShelf}
                                />
                            </li>
                        ))
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' >Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Principal;