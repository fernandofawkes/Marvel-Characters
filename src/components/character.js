import React from "react";

export default class Character extends React.Component {
  render() {
    return <div className="character-block">{this.props.char}</div>;
  }
}
