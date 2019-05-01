import * as React from "react";
import * as styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    return (
      <div className={styles.header}>
        <div>
          <Link to="/" className={styles.link}>
            List games
          </Link>
        </div>
        <div>
          <Link to="/add" className={styles.addGame}>
            <MaterialIcon icon="add" invert />
            Add a game
          </Link>
        </div>
      </div>
    );
  }
}
