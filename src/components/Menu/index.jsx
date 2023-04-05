import styles from "./Menu.module.scss";
import homeAtivo from "../../assets/icons/home-ativo.png";
import maisCurtidasInativo from "../../assets/icons/mais-curtidas-inativo.png";
import maisVistasInativo from "../../assets/icons/mais-vistas-inativo.png";
import novasInativo from "../../assets/icons/novas-inativo.png";
import surpreendaMeInativo from "../../assets/icons/surpreenda-me-inativo.png";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={homeAtivo} alt="" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidasInativo} alt="" />
          <a href="/">Mais Curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistasInativo} alt="" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novasInativo} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMeInativo} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
