import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    return (
      <div className={styles.header}>
        <div>
          <Link to="/">List games</Link>
        </div>
        <div>
          <Link to="/add" className={styles.addGame}>
            Add a game
          </Link>
        </div>
      </div>
    );
  }
}
