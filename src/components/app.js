import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./content";
import API from "../api";

export default class App extends React.Component {
  state = {
    characters: {},
    page: 1,
    itemsPerPage: 12,
    filter: "",
    sortDir: 1
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
    const { characters, page, itemsPerPage } = this.state;

    // Logic for displaying todos
    const maxPages = Math.floor(Object.keys(characters).length / itemsPerPage);
    const lastItem = page * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = Object.keys(characters)
      .slice(firstItem, lastItem)
      .reduce((obj, item) => {
        obj[item] = characters[item];
        return obj;
      }, {});

    return (
      <div className="marvel-characters">
        <Header />
        <Main characters={currentItems} page={page} max={maxPages} />
        <Footer />
      </div>
    );
  }
}
