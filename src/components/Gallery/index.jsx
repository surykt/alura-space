import React from "react";
import Tags from "../Tags";
import fotos from "./fotos.json";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.gallery__list}>
        {fotos.map(foto => {
          return (
            <li key={foto.id} className={styles.gallery__card}>
              <img
                className={styles.gallery__image}
                src={foto.image}
                alt={foto.title}
              />
              <p className={styles.gallery__description}>{foto.title}</p>
              <div>
                <p>{foto.credits}</p>
                <span>
                  <img src="" alt="ícone coração de curtir" />
                  <img src="" alt="ícone de abrir modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
