import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="mb-3">
          Stuy Hacks!
        </Header>
        <p>Welcome to Stuy Hacks!</p>
      </div>
    );
  }
}

export default App;
