import * as React from "react";
import { IFormData } from "../../App";

import styles from "./TextField.module.scss";

export type InputType = "text" | "number";

export interface ITextFieldProps {
  handleChange: (key: string, value: string) => void;
  inputType?: InputType;
  label?: string;
  placeholder?: string;
  stateData: IFormData;
  valueKey: string;
}

const TextField: React.FunctionComponent<ITextFieldProps> = props => {
  return (
    <React.Fragment>
      {props.label && <span className={styles.label}>{props.label}</span>}
      <input
        className={`${styles.input} ${styles.number}`}
        type={props.inputType}
        value={props.stateData[props.valueKey]}
        onChange={event =>
          props.handleChange(props.valueKey, event.target.value)
        }
        placeholder={props.placeholder}
        min={props.inputType === "number" && "0"}
      />
    </React.Fragment>
  );
};

TextField.defaultProps = {
  inputType: "text",
  placeholder: ""
};

export default TextField;
