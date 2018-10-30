import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import Principal from './Principal'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
    })
  }

  mudarShelf=(book, shelf)=>{
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
    })
  }

  render() {
    return (
      <div className='app'>

      <Route exact path='/' render={()=>(
        <Principal
        books={this.state.books}
        mudarShelf={this.mudarShelf}
        />
      )}/>

      <Route path='/search' render={()=>(
        <Search
        mudarShelf={this.mudarShelf}
        />
      )}/>
      </div>
    )}
}

export default BooksApp
