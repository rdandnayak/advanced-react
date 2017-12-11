import React, { Component } from 'react';
import debounce from 'lodash.debounce';

const styles = {
  searchText: {
    border: 1,
    marginBottom: 10,
    fontSize: 14
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300);

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  };

  render() {
    return (
      <div>
        <input
          style={styles.searchText}
          type="search"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
          placeholder="Enter search term"
        />
      </div>
    );
  }
}

export default SearchBar;
