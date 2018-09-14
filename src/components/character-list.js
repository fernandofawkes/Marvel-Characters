import React from "react";
import Character from "./character";

export default class CharacterList extends React.Component {
  render() {
    return (
      <div className="characters-list">
        {Object.keys(this.props.characters).map(id => {
          return <Character key={id} char={this.props.characters[id]} />;
        })}
      </div>
    );
  }
}
