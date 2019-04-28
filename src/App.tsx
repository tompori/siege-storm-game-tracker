import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import ListGames from "./paths/ListGames/ListGames";
import AddGame from "./paths/AddGame/AddGame";

export default class App extends React.Component<{}, {}> {
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
