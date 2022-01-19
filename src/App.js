import "./App.css";
import { Component } from "react";

import Header from "./components/View/Header";
import Left from "./components/View/Left";
import Main from "./components/View/Main";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <Left />

          <Main />
        </div>

        <div className="right-panel"></div>
      </div>
    );
  }
}

export default App;
