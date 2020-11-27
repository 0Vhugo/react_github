import React, { Component } from "react";

export default class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.state.text);
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  onChange = (e) => {
    //tips using more than one field using e.target.name
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search for a user...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
            onSubmit={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}
