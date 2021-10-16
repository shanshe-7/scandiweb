import { Component } from "react";
import { GlobalStyles } from "./global-styles";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Main />
      </>
    );
  }
}

export default App;
