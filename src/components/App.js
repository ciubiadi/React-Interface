import React, { Component } from 'react';
import '../css/App.css';
import AddBooks from '../components/AddBooks';
import SearchBooks from '../components/SearchBooks';
import BookList from '../components/BookList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myBooks : [],
      lastIndex: 0
    };
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
                <AddBooks />
                <BookList books={this.state.myBooks}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
