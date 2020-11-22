import React, { Component } from 'react';
import { FaPlus, FaMinus, FaStumbleuponCircle } from 'react-icons/fa';

class AddBooks extends Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
      author: '',
      bookNotes: '',
      relDate: '',
      relTime: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAdd(e) {
    e.preventDefault();
    let tempMyBooks = {
      bookName: this.state.bookName,
      author: this.state.author,
      notes: this.state.bookName,
      releaseDate: this.state.relDate + ' ' + this.state.relTime
    };
    console.log(this.state.relDate);
    console.log(this.state.relTime);
    this.props.addBooks(tempMyBooks);
    
    //Resetting the form
    this.setState({
      bookName: '',
      author: '',
      bookNotes: '',
      relDate: '',
      relTime: ''
    });

    this.props.toggleForm();
  }

    render() {
        return (
            <div className={
              'card textcenter mt-3 ' + 
              (this.props.formDisplay ? '' : 'add-appointment')
            }
            >
            <div className="apt-addheading card-header bg-primary text-white"
            onClick={this.props.toggleForm}>
              {this.props.formDisplay ? <FaMinus /> : <FaPlus />} Add Book
            </div>
  
            <div className="card-body">
              <form id="aptForm" noValidate onSubmit={this.handleAdd}>
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="petName"
                    readOnly
                  >
                    Book Name
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="bookName"
                      placeholder="Book's Name"
                      value={this.state.bookName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="author"
                  >
                    Author
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      placeholder="Author's Name"
                      value={this.state.author}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="relDate"
                  >
                    Date
                  </label>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      name="relDate"
                      id="relDate"
                      value={this.state.relDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="relTime"
                  >
                    Time
                  </label>
                  <div className="col-md-4">
                    <input
                      type="time"
                      className="form-control"
                      name="relTime"
                      id="relTime"
                      value={this.state.relTime}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                    Book Notes
                  </label>
                  <div className="col-md-10">
                    <textarea
                      className="form-control"
                      rows="4"
                      cols="50"
                      name="bookNotes"
                      id="bookNotes"
                      placeholder="Book Notes"
                      value={this.state.bookNotes}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row mb-0">
                  <div className="offset-md-2 col-md-10">
                    <button
                      type="submit"
                      className="btn btn-primary d-block ml-auto"
                    >
                      Add Book
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default AddBooks