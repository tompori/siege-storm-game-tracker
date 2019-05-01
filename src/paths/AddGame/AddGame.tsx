import * as React from "react";
import * as styles from "./AddGame.module.scss";
import { IFormData } from "../../App";

export interface IAddGameProps {
  handleChange: (key: string, value: string) => void;
  formData: IFormData;
}

export default class AddGame extends React.Component<IAddGameProps, {}> {
  public render() {
    return (
      <form onSubmit={this._handleSubmit} className={styles.form}>
        <div>
          <span>Game type</span>
        </div>
        <div>
          <label className={styles.choiceGroupItem}>
            <input
              type="radio"
              value="solo"
              checked={this.props.formData.gameType === "solo"}
              onChange={event => this._handleOptionChange(event)}
            />
            Solo
          </label>
          <label className={styles.choiceGroupItem}>
            <input
              type="radio"
              value="pvp"
              checked={this.props.formData.gameType === "pvp"}
              onChange={event => this._handleOptionChange(event)}
            />
            PvP
          </label>
        </div>
      </form>
    );
  }

  private _handleSubmit(event): void {
    event.preventDefault();
    console.log("Submitted!");
  }

  private _handleOptionChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange("gameType", event.currentTarget.value);
  }
}
