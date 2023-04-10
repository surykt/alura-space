import React from "react";
import Tags from "../Tags";
import fotos from "./fotos.json";
import styles from "./Gallery.module.scss";
import Cards from "./Cards";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards items={fotos} styles={styles} />
    </section>
  );
}
