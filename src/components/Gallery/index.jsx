import React, { useState } from "react";
import Tags from "../Tags";
import fotos from "./fotos.json";
import styles from "./Gallery.module.scss";
import Cards from "./Cards";

export default function Gallery() {
  const [items, setItems] = useState(fotos);

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards items={items} styles={styles} />
    </section>
  );
}
