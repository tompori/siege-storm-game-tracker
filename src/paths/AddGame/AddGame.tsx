import * as React from "react";
import { IFormData } from "../../App";
import FormRow from "../../components/FormRow/FormRow";
import ChoiceGroup from "../../components/ChoiceGroup/ChoiceGroup";
import TextField from "../../components/TextField/TextField";
import Bosses from "../../constants/Bosses";
import BossFactions from "../../constants/BossFactions";

import * as styles from "./AddGame.module.scss";

export interface IAddGameProps {
  handleChange: (key: string, value: string) => void;
  formData: IFormData;
}

export default class AddGame extends React.Component<IAddGameProps, {}> {
  public render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <FormRow title="Did you play solo or against another player?">
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
        </FormRow>
        {this.renderSoloForm()}
        {this.renderPvpForm()}
      </form>
    );
  }

  private renderSoloForm() {
    return (
      this.props.formData.gameType === "solo" && (
        <React.Fragment>
          {this.renderWonLostRow()}
          <FormRow
            condition={!!this.props.formData.wonLost}
            title="Which boss did you fight?"
          >
            <ChoiceGroup
              choices={Object.keys(Bosses).map(key => {
                return { title: Bosses[key].name, value: Bosses[key].id };
              })}
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="boss"
            />
          </FormRow>
          <FormRow
            condition={!!this.props.formData.boss}
            title="What difficulty?"
          >
            <ChoiceGroup
              choices={
                !!this.props.formData.boss &&
                Bosses[this.props.formData.boss].difficulties.map(
                  difficulty => {
                    return { title: difficulty.name, value: difficulty.id };
                  }
                )
              }
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="bossDifficulty"
            />
          </FormRow>
          <FormRow
            condition={!!this.props.formData.bossDifficulty}
            title="Which basic faction did the boss use?"
          >
            <ChoiceGroup
              choices={Object.keys(BossFactions)
                .map(key => {
                  if (BossFactions[key].type === "basic") {
                    return {
                      title: BossFactions[key].name,
                      value: BossFactions[key].id
                    };
                  }
                })
                .filter(choice => !!choice)}
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="bossFactionBasic"
            />
          </FormRow>
          <FormRow
            condition={!!this.props.formData.bossFactionBasic}
            title="And which advances faction?"
          >
            <ChoiceGroup
              choices={Object.keys(BossFactions)
                .map(key => {
                  if (BossFactions[key].type === "advanced") {
                    return {
                      title: BossFactions[key].name,
                      value: BossFactions[key].id
                    };
                  }
                })
                .filter(choice => !!choice)}
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="bossFactionAdvanced"
            />
          </FormRow>
          <FormRow
            condition={!!this.props.formData.bossFactionAdvanced}
            title="How much health and resources did they have left?"
          >
            <div>
              <TextField
                handleChange={this.props.handleChange}
                inputType="number"
                label="Health"
                stateData={this.props.formData}
                valueKey="bossHealth"
              />
              <TextField
                handleChange={this.props.handleChange}
                inputType="number"
                label="Resources"
                stateData={this.props.formData}
                valueKey="bossResources"
              />
            </div>
          </FormRow>
        </React.Fragment>
      )
    );
  }

  private renderPvpForm() {
    return this.props.formData.gameType === "pvp" && this.renderWonLostRow();
  }

  private renderWonLostRow() {
    return (
      <FormRow condition={!!this.props.formData.gameType} title="Did you win?">
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
      </FormRow>
    );
  }

  private handleSubmit(event): void {
    event.preventDefault();
    console.log("Submitted!");
  }
}
