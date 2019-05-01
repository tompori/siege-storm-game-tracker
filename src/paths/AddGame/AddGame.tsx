import * as React from "react";
import styles from "./AddGame.module.css";

export interface IAddGameProps {}

export default class AddGame extends React.Component<IAddGameProps, {}> {
  public render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div>
          <span>Game type</span>
        </div>
        <div>
          <label>
            <input type="radio" value="solo" />
            Solo
          </label>
          <label>
            <input type="radio" value="solo" />
            PvP
          </label>
        </div>
      </form>
    );
  }

  private handleSubmit(event): void {
    event.preventDefault();
    console.log("Submitted!");
  }
}
