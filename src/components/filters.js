import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <div className="filters">
        <input type="text" placeholder="Characters" />
        <select>
          <option value="1">A-Z</option>
          <option value="-1">Z-A</option>
        </select>
        <input type="radio" />
        <div className="chevron-up" />
        <div className="chevron-down" />
      </div>
    );
  }
}
