import React from "react";
import popularFotos from "./popular-fotos.json";
import styles from "./Popular.module.scss";

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {popularFotos.map(popularFoto => {
          return (
            <li key={popularFoto.id}>
              <img src={popularFoto.path} alt={popularFoto.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
