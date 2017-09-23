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

      this.state = { term : 'Search here..'};
    }

    render() {
      // return <input onChange = {this.onInputChange} />
      return (
        <div>
          <input
            value = { this.state.term }
            onChange = {(event) => this.setState({ term: event.target.value })}/>
        </div>
      );
    }

    // event handler for input box
    // onInputChange(event) {
    //   console.log(event.target.value);
    // }
}

export default SearchBar;
