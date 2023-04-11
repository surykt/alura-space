import React from "react";
import styles from "./Tags.module.scss";
import fotos from "../Gallery/fotos.json"

export default function Tags({ tags, tagFilter, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map(tag => {
          return(
            <li key={tag} onClick={() => tagFilter(tag)}>{tag}</li>
          )
        })}
        <li onClick={() => setItems(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
