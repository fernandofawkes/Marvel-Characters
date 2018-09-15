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
    API.getCharacters()
      .then(respRaw => respRaw.json())
      .then(response => {
        this.setState({
          characters: response.data.results.reduce((charsObj, char) => {
            charsObj[char.id] = char;
            return charsObj;
          }, {})
        });
      });
  }

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
