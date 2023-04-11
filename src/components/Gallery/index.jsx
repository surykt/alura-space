import React, { useState } from "react";
import Tags from "../Tags";
import fotos from "./fotos.json";
import styles from "./Gallery.module.scss";
import Cards from "./Cards";

export default function Gallery() {
  const [items, setItems] = useState(fotos);

  const tags = [...new Set(fotos.map(valor => valor.tag))]

  const tagFilter = (tag) => {
    const newFotos = fotos.filter(foto => foto.tag === tag)
    setItems(newFotos)
  }

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} tagFilter={tagFilter} setItems={setItems} />
      <Cards items={items} styles={styles} />
    </section>
  );
}
