import { extend } from 'jquery';
import { fromPairs } from 'lodash';
import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class BookList extends Component {
    render() {      
        return (
        <div className="appointment-list item-list mb-3">
          {this.props.books.map(item => (
            <div className="pet-item col media py-3" key={item.bookId}>
              <div className="mr-3">
                <button className="pet-delete btn btn-sm btn-danger">
                  <FaTimes />
                </button>
              </div>
  
              <div className="pet-info media-body">
                <div className="pet-head d-flex">
                  <span className="pet-name">{item.bookName}</span>
                  <span className="apt-date ml-auto">
                    <Moment 
                      date={item.releaseDate}
                      parse="YYYY-MM-DD HH:MM"
                      format="MMM-D h:mma"
                    />
                  </span>
                </div>
  
                <div className="owner-name">
                  <span className="label-item">Author: </span>
                  <span>{item.author}</span>
                </div>
                <div className="apt-notes">{item.notes}</div>
              </div>
            </div> 
          ))}
        </div>
        );
    }
}

export default BookList