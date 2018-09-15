import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <div className="filters">
        <input
          type="text"
          className="fitler-search"
          onChange={this.props.handleSearch}
          placeholder="Characters"
        />
        <select className="fitler-order" onChange={this.props.handleDir}>
          <option value="1">A-Z</option>
          <option value="-1">Z-A</option>
        </select>
        <input
          type="radio"
          readOnly
          className="fitler-dir"
          checked={this.props.dir === 1}
        />
        <div className="chevron-up" />
        <div className="chevron-down" />
      </div>
    );
  }
}
