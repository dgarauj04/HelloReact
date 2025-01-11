import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

function Menu() {
const localizacao = useLocation();
console.log(localizacao);

    return(
        <header>
            <nav className="navegacao">
                <Link to="/" className="link ">Home</Link>

                <Link to="/sobremim" className="link">Sobre mim</Link>
            </nav>
        </header>
    )
}


export default Menu;