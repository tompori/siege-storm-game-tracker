import * as React from "react";
import * as styles from "./App.module.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import ListGames from "./paths/ListGames/ListGames";
import AddGame from "./paths/AddGame/AddGame";

export interface IFormData {
  boss: string;
  bossDifficulty: string;
  bossFactionAdvanced: string;
  bossFactionBasic: string;
  gameType: string;
  wonLost: string;
}

interface IAppState {
  formData: IFormData;
}

export default class App extends React.Component<{}, IAppState> {
  private _emptyFormData = {
    boss: null,
    bossDifficulty: null,
    bossFactionAdvanced: null,
    bossFactionBasic: null,
    gameType: null,
    wonLost: null
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
            <Route
              path="/add"
              render={props => (
                <AddGame
                  {...props}
                  formData={this.state.formData}
                  handleChange={this._handleFormChange.bind(this)}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }

  private _handleFormChange(valueKey: string, value: string): void {
    this.setState({
      formData: {
        ...this.state.formData,
        [valueKey]: value
      }
    });
  }
}
