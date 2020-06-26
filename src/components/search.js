import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchTermChange(event.target.value)
  }

  render() {
    return (
      <header>
        <div className="search-bar">
          <input
            className="form-control mr-sm-12" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
      </header>
    );
  }
}