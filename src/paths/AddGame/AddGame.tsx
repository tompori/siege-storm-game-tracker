import * as React from "react";
import { IFormData, IGame } from "../../App";
import FormRow from "../../components/FormRow/FormRow";
import ChoiceGroup from "../../components/ChoiceGroup/ChoiceGroup";
import TextField from "../../components/TextField/TextField";
import Bosses from "../../constants/Bosses";
import BossFactions from "../../constants/BossFactions";
import PlayerFactions from "../../constants/PlayerFactions";
import { ISoloGame, IPvpGame } from "../../App";
import uuidv1 from "uuid/v1";

import * as styles from "./AddGame.module.scss";

export interface IAddGameProps {
  formData: IFormData;
  handleChange: (key: string, value: string) => void;
  handleSubmit: (gameData: ISoloGame | IPvpGame) => void;
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
        {this.renderSubmitButton()}
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
                Object.keys(Bosses[this.props.formData.boss].difficulties).map(
                  difficultyKey => {
                    const difficulty =
                      Bosses[this.props.formData.boss].difficulties[
                        difficultyKey
                      ];
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
            title="And which advanced faction?"
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
                placeholder={
                  this.props.formData.boss &&
                  this.props.formData.bossDifficulty &&
                  String(
                    Bosses[this.props.formData.boss].difficulties[
                      this.props.formData.bossDifficulty
                    ].health
                  )
                }
                stateData={this.props.formData}
                valueKey="bossHealth"
              />
              <TextField
                handleChange={this.props.handleChange}
                inputType="number"
                label="Resources"
                placeholder={
                  this.props.formData.boss &&
                  this.props.formData.bossDifficulty &&
                  String(
                    Bosses[this.props.formData.boss].difficulties[
                      this.props.formData.bossDifficulty
                    ].resources
                  )
                }
                stateData={this.props.formData}
                valueKey="bossResources"
              />
            </div>
          </FormRow>
          <FormRow
            condition={
              (!!this.props.formData.bossHealth &&
                !!this.props.formData.bossResources) ||
              !!this.props.formData.playerFaction
            }
            title="Which faction did you play as?"
          >
            <ChoiceGroup
              choices={Object.keys(PlayerFactions).map(factionKey => {
                const faction = PlayerFactions[factionKey];
                return {
                  title: faction.name,
                  value: faction.id
                };
              })}
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="playerFaction"
            />
          </FormRow>
          <FormRow
            condition={!!this.props.formData.playerFaction}
            title="How much resources did you have left?"
          >
            <div>
              <TextField
                handleChange={this.props.handleChange}
                inputType="number"
                label="Resources"
                placeholder="34"
                stateData={this.props.formData}
                valueKey="playerResources"
              />
            </div>
          </FormRow>
        </React.Fragment>
      )
    );
  }

  private renderPvpForm() {
    return (
      this.props.formData.gameType === "pvp" && (
        <React.Fragment>
          {this.renderWonLostRow()}
          <FormRow
            condition={!!this.props.formData.wonLost}
            title="Which faction did you play as?"
          >
            <ChoiceGroup
              choices={Object.keys(PlayerFactions).map(factionKey => {
                const faction = PlayerFactions[factionKey];
                return {
                  title: faction.name,
                  value: faction.id
                };
              })}
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="playerFaction"
            />
          </FormRow>
          <FormRow
            condition={!!this.props.formData.playerFaction}
            title="How much resources did you have left?"
          >
            <div>
              <TextField
                handleChange={this.props.handleChange}
                inputType="number"
                label="Resources"
                placeholder="34"
                stateData={this.props.formData}
                valueKey="playerResources"
              />
            </div>
          </FormRow>
          <FormRow
            condition={
              !!this.props.formData.playerFaction &&
              (!!this.props.formData.playerResources ||
                !!this.props.formData.opponentFaction)
            }
            title="Which faction did your opponent play as?"
          >
            <ChoiceGroup
              choices={Object.keys(PlayerFactions).map(factionKey => {
                const faction = PlayerFactions[factionKey];
                return {
                  title: faction.name,
                  value: faction.id
                };
              })}
              handleChange={this.props.handleChange}
              stateData={this.props.formData}
              valueKey="opponentFaction"
            />
          </FormRow>
          <FormRow
            condition={!!this.props.formData.opponentFaction}
            title="How much resources did they have left?"
          >
            <div>
              <TextField
                handleChange={this.props.handleChange}
                inputType="number"
                label="Resources"
                placeholder="34"
                stateData={this.props.formData}
                valueKey="opponentResources"
              />
            </div>
          </FormRow>
        </React.Fragment>
      )
    );
  }

  private renderSubmitButton() {
    const formData = this.props.formData;
    if (
      (formData.gameType === "solo" &&
        formData.wonLost &&
        formData.boss &&
        formData.bossDifficulty &&
        formData.bossFactionBasic &&
        formData.bossFactionAdvanced &&
        formData.bossHealth &&
        formData.bossResources &&
        formData.playerFaction &&
        formData.playerResources) ||
      (formData.gameType === "pvp" &&
        formData.wonLost &&
        formData.opponentFaction &&
        formData.opponentResources &&
        formData.playerFaction &&
        formData.playerResources)
    ) {
      return (
        <div className={styles.submitRow}>
          <button
            className={styles.submitButton}
            onClick={event => this.handleSubmit(event)}
          >
            Save
          </button>
        </div>
      );
    }
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
    // Prevemt default submit
    event.preventDefault();

    // Define some helpoers
    const formData = this.props.formData;
    const currentDateTime = new Date();
    const schemaVersion = "1";

    // Define base game data, common for all game types
    const baseGameData: IGame = {
      created: currentDateTime,
      gameType: formData.gameType,
      id: uuidv1(),
      modified: currentDateTime,
      playerFaction: formData.playerFaction,
      playerResources: formData.playerResources,
      schemaVersion: schemaVersion,
      wonLost: formData.wonLost
    };

    // Submit solo game
    if (baseGameData.gameType === "solo") {
      const gameData: ISoloGame = {
        ...baseGameData,
        boss: formData.boss,
        bossDifficulty: formData.bossDifficulty,
        bossFactionAdvanced: formData.bossFactionAdvanced,
        bossFactionBasic: formData.bossFactionBasic,
        bossHealth: formData.bossHealth,
        bossResources: formData.bossResources
      };
      this.props.handleSubmit(gameData);
    }

    // Submit PvP games
    if (this.props.formData.gameType === "pvp") {
      const gameData: IPvpGame = {
        ...baseGameData,
        opponentFaction: formData.opponentFaction,
        opponentResources: formData.opponentResources
      };
      this.props.handleSubmit(gameData);
    }
  }
}
