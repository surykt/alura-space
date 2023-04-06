import React from "react";
import styles from "./Menu.module.scss";
import icons from "./icons.json";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icons.map(icon => {
          return (
            <li key={icon.id} className={styles.menu__item}>
              <img src={icon.path} alt={icon.alt} />
              <a href="/">{icon.link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
