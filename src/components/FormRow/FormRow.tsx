import * as React from "react";

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
        <div>
          <span>{title}</span>
        </div>
        {children}
      </React.Fragment>
    )
  );
};

export default FormRow;
