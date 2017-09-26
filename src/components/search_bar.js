import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// this is a functional component
// const SearchBar = () => {
//   return <input />
// };

// this is a class based component
class SearchBar extends Component {

    constructor(props) {
      super(props);
      this.state = { term : ''};
    }

    render() {
      // return <input onChange = {this.onInputChange} />
      return (
        <div className = "search-bar">
          <input placeholder = "Search here.."
            value = { this.state.term }
            onChange = {(event) => this.onInputChange(event.target.value)} />
        </div>
      );
    }

    onInputChange(term) {
      this.setState({term : term});
      this.props.onSearchTermChange(term);
    }

    // event handler for input box
    // onInputChange(event) {
    //   console.log(event.target.value);
    // }
}

export default SearchBar;
