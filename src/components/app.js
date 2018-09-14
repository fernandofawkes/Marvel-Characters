import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./content";

export default class App extends React.Component {
  state = {
    characters: {},
    page: 1,
    itemsPerPage: 12,
    filter: "",
    sortDir: 1
  };
  componentDidMount() {
    // mock da busca de dados da marvel
    this.setState({
      characters: {
        1: "asdadasda",
        2: "wqe2312",
        3: "131231",
        4: "wqe2312",
        5: "131231",
        6: "wqe2312",
        7: "131231",
        8: "wqe2312",
        9: "131231",
        10: "wqe2312",
        11: "131231",
        12: "131231",
        13: "wqe2312",
        14: "131231",
        15: "wqe2312",
        16: "131231",
        17: "wqe2312",
        18: "131231",
        19: "wqe2312",
        20: "131231",
        21: "wqe2312",
        22: "131231",
        23: "wqe2312",
        24: "131231",
        25: "wqe2312",
        26: "131231"
      }
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
