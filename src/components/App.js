import React, { Component } from 'react';
import '../css/App.css';
import AddBooks from '../components/AddBooks';
import SearchBooks from '../components/SearchBooks';
import BookList from '../components/BookList';
import { without } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myBooks : [],
      addFormClicked: false,
      lastIndex: 0
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      addFormClicked: !this.state.addFormClicked
    })
  }

  deleteBook(book) {
    let tempBook = this.state.myBooks;
    tempBook = without(tempBook, book)
    this.setState({
      myBooks : tempBook
    })
  }

 componentDidMount() {
   fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const books = result.map(item => {
        item.bookId = this.state.lastIndex; 
        this.setState({
          lastIndex: this.state.lastIndex+1
        });
        return item;
      })
      this.setState({
        myBooks: books
      });
    });
 }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <SearchBooks />
                <AddBooks toggleForm={this.toggleForm} formDisplay={this.state.addFormClicked}/>
                <BookList books={this.state.myBooks} deleteBook={this.deleteBook}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
