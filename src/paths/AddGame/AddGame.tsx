import * as React from "react";
import { IFormData } from "../../App";
import ChoiceGroup from "../../components/ChoiceGroup/ChoiceGroup";

import * as styles from "./AddGame.module.scss";

export interface IAddGameProps {
  handleChange: (key: string, value: string) => void;
  formData: IFormData;
}

export default class AddGame extends React.Component<IAddGameProps, {}> {
  public render() {
    return (
      <form onSubmit={this._handleSubmit} className={styles.form}>
        <div>
          <span>Did you play solo or against another player?</span>
        </div>
        <ChoiceGroup
          choices={[
            {
              title: "Solo",
              value: "solo"
            },
            {
              title: "PvP",
              value: "pvp"
            }
          ]}
          handleChange={this.props.handleChange}
          stateData={this.props.formData}
          valueKey="gameType"
        />
        {this.props.formData.gameType && (
          <React.Fragment>
            <div>
              <span>Did you win?</span>
            </div>
            <ChoiceGroup
              choices={[
                {
                  title: "Won",
                  value: "won"
                },
                {
                  title: "Lost",
                  value: "lost"
                }
              ]}
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="wonLost"
            />
          </React.Fragment>
        )}
      </form>
    );
  }

  private _handleSubmit(event): void {
    event.preventDefault();
    console.log("Submitted!");
  }
}
