import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import "./style/App.css";

// THIS IS THE ONLY TIME we do direct assigment
// to this.state
class App extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = { lat: null, long: null, errorMessage: "" };
  //   }

  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) =>
        this.setState({
          errorMessage: err.message,
        })
    );
  }

  //   componentDidUpdate() {
  //     console.log("My component was just updated - it rerendered!");
  //   }

  //   // Good for data loading and grabbing information one time
  //   componentDidMount() {}

  //   // Good for data loading when state/props change
  //   // E.g. making a network request everytime a user clicks a button
  //   componentDidUpdate() {}

  //   // Used anytime we remove a component from the screen and need to do cleanup after
  //   componentWillUnmount() {}

  // React says we have to define render
  // This is only for returning JSX
  renderContent() {
    if (
      (this.state.errorMessage && !this.state.lat) ||
      (this.state.errorMessage && !this.state.long)
    ) {
      return <div>Error: {this.state.errorMessage} </div>;
    } else if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader message="Please accept message request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
