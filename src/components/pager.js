import React from "react";
import LeftArrow from "../assets/arrow-left.svg";
import RightArrow from "../assets/arrow-right.svg";

export default class Pager extends React.Component {
  render() {
    return (
      <div className="pager">
        <button
          disabled={this.props.page === 1}
          className="pager-button"
          type="button"
          onClick={() => {
            this.props.buttonsClick(-1);
          }}
        >
          <LeftArrow width={20} stroke="#d8dde6" />
        </button>
        <div className="pager-numbers">
          <input
            type="number"
            min="1"
            max={this.props.max}
            value={this.props.page}
            onChange={this.props.pageChange}
          />
          <span className="pager-total">de {this.props.max}</span>
        </div>
        <button
          className="pager-button"
          type="button"
          onClick={() => {
            this.props.buttonsClick(1);
          }}
          disabled={this.props.page === this.props.max}
        >
          <RightArrow width={20} stroke="#d8dde6" />
        </button>
      </div>
    );
  }
}
