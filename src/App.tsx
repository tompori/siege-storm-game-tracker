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
  bossHealth: string;
  bossResources: string;
  gameType: string;
  opponentFaction: string;
  opponentResources: string;
  playerFaction: string;
  playerResources: string;
  wonLost: string;
}

interface IAppState {
  formData: IFormData;
}

export default class App extends React.Component<{}, IAppState> {
  private _emptyFormData = {
    boss: "",
    bossDifficulty: "",
    bossFactionAdvanced: "",
    bossFactionBasic: "",
    bossHealth: "",
    bossResources: "",
    gameType: "",
    opponentFaction: "",
    opponentResources: "",
    playerFaction: "",
    playerResources: "",
    wonLost: ""
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

  public componentDidUpdate(prevProps, prevState) {
    // Automatically input player resources based on won/lost state
    if (prevState.formData.wonLost !== this.state.formData.wonLost) {
      const newResources = {
        playerResources: this.state.formData.wonLost === "lost" ? "0" : "",
        opponentResources:
          this.state.formData.gameType === "pvp" &&
          this.state.formData.wonLost === "won"
            ? "0"
            : ""
      };
      this.setState({
        formData: {
          ...this.state.formData,
          ...newResources
        }
      });
    }
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
