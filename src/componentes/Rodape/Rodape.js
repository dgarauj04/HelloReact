import "./Rodape.css";
import { ReactComponent as MarcaRegistrada } from "../../assets/marca_registrada.svg";

export default function Rodape() {
    return (
        <footer className="rodape">
            <MarcaRegistrada />
            <p className="rodape__paragrafo">Desenvolvido por Douglass Araujo</p>
        </footer>
    );
}