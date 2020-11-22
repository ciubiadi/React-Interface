import { extend } from 'jquery'
import React, { Component } from 'react'

class SearchBooks extends Component {
    render() {
        return (
            <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchApts"
                  type="text"
                  className="form-control"
                  aria-label="Search Books"
                  onChange={e => this.props.searchBook(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by: <span className="caret" />
                  </button>
    
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                    <button className={
                      'sort-by dropdown-item ' + (this.props.orderBy === 'bookName' ? 'active' : '')  
                    } 
                    onClick={ e => this.props.changeOrder('bookName', this.props.orderDirection)}
                    href="#">
                      Book Name
                    </button>
                    <button className={
                      'sort-by dropdown-item ' + (this.props.orderBy === 'releaseDate' ? 'active' : '')  
                    } 
                    onClick={ e => this.props.changeOrder('releaseDate', this.props.orderDirection)}
                    href="#">
                      Date
                    </button>
                    <button className={
                      'sort-by dropdown-item ' + (this.props.orderBy === 'author' ? 'active' : '')  
                    }
                    onClick={ e => this.props.changeOrder('author', this.props.orderDirection)}
                    href="#">
                      Author
                    </button>
                    <div role="separator" className="dropdown-divider" />
                    <button className={
                      'sort-by dropdown-item ' + (this.props.orderDirection === 'asc' ? 'active' : '')  
                    } 
                    onClick={ e => this.props.changeOrder(this.props.orderBy, 'asc')}
                    href="#">
                      Asc
                    </button>
                    <button className={
                      'sort-by dropdown-item ' + (this.props.orderDirection === 'desc' ? 'active' : '')  
                    } 
                    onClick={ e => this.props.changeOrder(this.props.orderBy, 'desc')}
                    href="#">
                      Desc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default SearchBooks