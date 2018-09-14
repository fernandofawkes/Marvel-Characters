import React from "react";

export default class Pager extends React.Component {
  render() {
    return (
      <div className="pager">
        <button type="button">{"<"}</button>
        <input
          type="number"
          min="1"
          max={this.props.max}
          value={this.props.page}
          onChange={console.log}
        />
        <span className="pager-total">de {this.props.max}</span>
        <button type="button">></button>
      </div>
    );
  }
}
