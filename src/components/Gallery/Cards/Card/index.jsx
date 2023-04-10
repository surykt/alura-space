import React from "react";
import favorito from "./favorito.png";
import open from "./open.png";

export default function Card({ item, styles }) {
  return (
    <li key={item.id} className={styles.gallery__card}>
      <img
        className={styles.gallery__image}
        src={item.image}
        alt={item.title}
      />
      <p className={styles.gallery__description}>{item.title}</p>
      <div>
        <p>{item.credits}</p>
        <span>
          <img src={favorito} alt="ícone coração de curtir" />
          <img src={open} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  );
}
