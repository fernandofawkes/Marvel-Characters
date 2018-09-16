import React from "react";
import FilterIcon from "../assets/filter.svg";
import Up from "../assets/arrow-up.svg";
import Down from "../assets/arrow-down.svg";

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
        <div className="filter-order">
          <FilterIcon stroke="#ee171f" />
          <select
            className="fitler-order-dropdown"
            value={this.props.dir}
            onChange={this.props.handleDir}
          >
            <option value="1">A-Z</option>
            <option value="-1">Z-A</option>
          </select>
          {this.props.dir === 1 ? (
            <Down
              width={30}
              className="filters-icon"
              stroke="#d8dde6"
              onClick={() => {
                this.props.toggleDir(-1);
              }}
            />
          ) : (
            <Up
              className="filters-icon"
              width={30}
              stroke="#d8dde6"
              onClick={() => {
                this.props.toggleDir(1);
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
