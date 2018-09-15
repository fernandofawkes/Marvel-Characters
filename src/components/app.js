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

  handleDirChange = changeEvent => {
    this.setState({ sortDir: +changeEvent.target.value });
  };
  handleSearch = changeEvent => {
    this.setState({ filter: changeEvent.target.value });
  };

  render() {
    const { characters, page, itemsPerPage, sortDir, filter } = this.state;
    let charKeys = Object.keys(characters);

    const relevantResults = charKeys.reduce((obj, key) => {
      const char = characters[key];
      if (filter) {
        if (~char.name.toLowerCase().indexOf(filter.toLowerCase())) {
          obj[key] = char;
        }
      } else {
        obj[key] = char;
      }
      return obj;
    }, {});

    const relevantKeys = Object.keys(relevantResults);

    const maxPages = Math.floor(relevantKeys.length / itemsPerPage) || 1;
    const lastItem = page * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;

    let currentItems = relevantKeys.sort((a, b) =>
      relevantResults[a].name
        .toLowerCase()
        .localeCompare(relevantResults[b].name.toLowerCase())
    );
    if (sortDir < 0) currentItems.reverse();
    currentItems = currentItems
      .slice(firstItem, lastItem)
      .map(key => relevantResults[key]);

    return (
      <div className="marvel-characters">
        <Header />
        <Main
          characters={currentItems}
          dirHandler={this.handleDirChange}
          searchHandler={this.handleSearch}
          page={page}
          dir={sortDir}
          max={maxPages}
        />
        <Footer />
      </div>
    );
  }
}
