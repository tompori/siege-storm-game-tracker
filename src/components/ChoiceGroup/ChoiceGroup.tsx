import * as React from "react";
import { IFormData } from "../../App";

import styles from "./ChoiceGroup.module.scss";

interface IChoiceGroupProps {
  choices: {
    title: string;
    value: string;
  }[];
  handleChange: (valueKey: string, value: string) => void;
  stateData: IFormData;
  valueKey: string;
}

const ChoiceGroup: React.FunctionComponent<IChoiceGroupProps> = props => {
  return (
    <div className={styles.ChoiceGroup}>
      {props.choices.map(choice => (
        <label className={styles.choiceGroupItem}>
          <input
            type="radio"
            value={choice.value}
            checked={props.stateData[props.valueKey] === choice.value}
            onChange={event => props.handleChange(props.valueKey, choice.value)}
          />
          <span className={styles.choiceTitle}>{choice.title}</span>
        </label>
      ))}
    </div>
  );
};

export default ChoiceGroup;
