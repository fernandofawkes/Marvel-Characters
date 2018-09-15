import React from "react";
import Filters from "./filters";
import CharacterList from "./character-list";
import Pager from "./pager";

export default class Main extends React.Component {
  render() {
    return (
      <main className="content">
        <div className="centered">
          <h1 className="content-title">Character</h1>
          <Filters
            handleDir={this.props.dirHandler}
            dir={this.props.dir}
            handleSearch={this.props.searchHandler}
          />
          <CharacterList characters={this.props.characters} />
          <Pager page={this.props.page} max={this.props.max} />
        </div>
      </main>
    );
  }
}
