import logo from "./logo.png";
import search from "./search.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo do Alura Space" />
      <div>
        <input type="text" placeholder="O que voçê procura?" />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
  );
}
