import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <main className="content">
        <div className="centered">
          <h1 className="content-title">Character</h1>
          <div className="filters">{/*[TODO]*/}</div>
          <div className="characters-list" />
        </div>
      </main>
    );
  }
}
