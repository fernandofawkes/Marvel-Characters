import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./content";

export default class App extends React.Component {
  render() {
    return (
      <div className="marvel-characters">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
