import homeAtivo from "../../assets/icons/home-ativo.png";
import maisCurtidasInativo from "../../assets/icons/mais-curtidas-inativo.png";
import maisVistasInativo from "../../assets/icons/mais-vistas-inativo.png";
import novasInativo from "../../assets/icons/novas-inativo.png";
import surpreendaMeInativo from "../../assets/icons/surpreenda-me-inativo.png";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <img src={homeAtivo} alt="" />
          <a href="/">Início</a>
        </li>
        <li>
          <img src={maisCurtidasInativo} alt="" />
          <a href="/">Mais Curtidas</a>
        </li>
        <li>
          <img src={maisVistasInativo} alt="" />
          <a href="/">Mais vistas</a>
        </li>
        <li>
          <img src={novasInativo} alt="" />
          <a href="/">Novas</a>
        </li>
        <li>
          <img src={surpreendaMeInativo} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
