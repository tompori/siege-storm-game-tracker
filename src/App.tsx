import * as React from "react";
import * as styles from "./App.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import ListGames from "./paths/ListGames/ListGames";
import AddGame from "./paths/AddGame/AddGame";

interface IAppState {
  formData: {
    gameType: string;
  };
}

export default class App extends React.Component<{}, IAppState> {
  private _emptyFormData = {
    gameType: null
  };

  constructor(props) {
    super(props);

    this.state = {
      formData: {
        ...this._emptyFormData
      }
    };
  }

  public render() {
    return (
      <Router>
        <div className={styles.App}>
          <Header />
          <div className={styles.contentArea}>
            <Route exact path="/" component={ListGames} />
            <Route path="/add" component={AddGame} />
          </div>
        </div>
      </Router>
    );
  }
}
