import React from "react";
import Quotes from "../config/quotes";

export default class Loader extends React.Component {
  state = {
    quote: Quotes[Math.floor(Math.random() * Quotes.length)]
  };
  componentDidMount = () => {
    this.setState({
      intervalId: setInterval(() => {
        this.setState({
          quote: Quotes[Math.floor(Math.random() * Quotes.length)]
        });
      }, 3500)
    });
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    return <div className="loader">{this.state.quote}</div>;
  }
}
