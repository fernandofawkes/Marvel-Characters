import React from "react";
import Filters from "./filters";
import CharacterList from "./character-list";
import Loader from "./loader";
import Pager from "./pager";

export default class Main extends React.Component {
  state = {
    page: 1,
    itemsPerPage: 12,
    filter: "",
    sortDir: 1
  };

  handleDirChange = changeEvent => {
    this.setState({ sortDir: +changeEvent.target.value });
  };
  handleSearch = changeEvent => {
    this.setState({ filter: changeEvent.target.value });
  };
  setDir = sortDir => {
    this.setState({
      sortDir
    });
  };
  navigate = direction => {
    this.setState({
      page: (+this.state.page + direction)
    });
  };

  navigateTo = changeEvent => {
    let page = this.state.page;
    if (changeEvent.target.validity.valid) {
      page = changeEvent.target.value;
    }
    this.setState({
      page
    });
  };

  render() {
    const { page, itemsPerPage, sortDir, filter } = this.state;
    const { characters } = this.props;
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
      <main className="content">
        <div className="centered">
          <h1 className="content-title">Character</h1>
          <Filters
            dir={sortDir}
            handleDir={this.handleDirChange}
            toggleDir={this.setDir}
            handleSearch={this.handleSearch}
          />
          {currentItems.length ? (
            <CharacterList characters={currentItems} />
          ) : (
            <Loader />
          )}
          <Pager
            page={page}
            max={maxPages}
            buttonsClick={this.navigate}
            pageChange={this.navigateTo}
          />
        </div>
      </main>
    );
  }
}
