import * as React from "react";

import styles from "./FormRow.module.scss";

interface IFormRowProps {
  condition?: boolean;
  title: string;
}

const FormRow: React.FunctionComponent<IFormRowProps> = ({
  children,
  condition = true,
  title
}) => {
  return (
    condition && (
      <React.Fragment>
        <div className={styles.formRowTitleWrapper}>
          <span>{title}</span>
        </div>
        {children}
      </React.Fragment>
    )
  );
};

export default FormRow;
