import React, { Component } from 'react';
import '../css/App.css';
import AddBooks from '../components/AddBooks';
import SearchBooks from '../components/SearchBooks';
import BookList from '../components/BookList';
import { findIndex, without } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myBooks : [],
      addFormClicked: false,
      orderBy: 'bookName',
      orderDirection: 'asc',
      queryText: '',
      lastIndex: 0
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addBooks = this.addBooks.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchBook = this.searchBook.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
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

  addBooks(book) {
    let tempBooks = this.state.myBooks;
    book.bookId = this.state.lastIndex;

    tempBooks.unshift(book);

    this.setState({
      myBooks: tempBooks,
      lastIndex: this.state.lastIndex + 1
    });
  }

  searchBook(query) {
    this.setState({
      queryText: query
    });
  }

  updateInfo(name, value, id) {
    let tempBook = this.state.myBooks;
    let bookIndex = findIndex(this.state.myBooks, {
      bookId: id
    });
    tempBook[bookIndex][name] = value;
    this.setState({
      myBooks: tempBook
    });
  }

  changeOrder(order, direction) {
    this.setState({
      orderBy: order,
      orderDirection: direction
    });
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
    let order;
    let filteredBooks = this.state.myBooks;
    if( this.state.orderDirection === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filteredBooks = filteredBooks.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }

    }).filter(eachItem => {
      return (
        eachItem['bookName']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) || 
        eachItem['author']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['notes']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase())
      )
    });
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <SearchBooks 
                  orderBy={this.state.orderBy}
                  orderDirection={this.state.orderDirection}
                  changeOrder={this.changeOrder}
                  searchBook={this.searchBook}
                />
                <AddBooks toggleForm={this.toggleForm} formDisplay={this.state.addFormClicked} addBooks={this.addBooks}/>
                <BookList 
                  books={filteredBooks} 
                  deleteBook={this.deleteBook}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
