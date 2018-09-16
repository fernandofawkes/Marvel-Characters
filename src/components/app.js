import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./content";
import API from "../api";

export default class App extends React.Component {
  state = {
    characters: {}
  };
  componentDidMount() {
    const marvel = new API();
    marvel.getAllCharacters(this.loadCharacters);
  }

  loadCharacters = chars => {
    this.setState({
      characters: chars.reduce((charsObj, char) => {
        charsObj[char.id] = char;
        return charsObj;
      }, {})
    });
  };

  render() {
    return (
      <div className="marvel-characters">
        <Header />
        <Main characters={this.state.characters} />
        <Footer />
      </div>
    );
  }
}
