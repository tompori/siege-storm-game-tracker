import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./App.module.css";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <div className={styles.App}>{this._renderHeader}</div>
        <Route exact path="/" component={this._renderListGames} />
        <Route path="/add" component={this._renderAddGame} />
      </Router>
    );
  }

  private _renderHeader = (
    <div>
      <Link to="/">List games</Link>
      <Link to="/add">Add a game</Link>
    </div>
  );

  private _renderListGames = () => <div>List of games</div>;

  private _renderAddGame = () => <div>Add a game</div>;
}
