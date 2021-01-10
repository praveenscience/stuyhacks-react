import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  state = {
    Dark: true
  };
  handleToggle = e => {
    e.preventDefault();
    this.setState({
      Dark: !this.state.Dark
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="mb-3">
          Stuy Hacks!
        </Header>
        <Header dark={false} className="mb-3">
          Stuy Hacks Light!
        </Header>
        <Header dark={true} className="mb-3">
          Stuy Hacks Pro!
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button className="btn btn-primary" onClick={this.handleToggle}>
                Toggle
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
