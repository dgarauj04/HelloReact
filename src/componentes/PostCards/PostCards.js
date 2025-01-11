import "./PostCards.css";
import { Link } from "react-router-dom";
import BotoesPrincipais from "componentes/BotoesPrincipais/BotoesPrincipais"; 

export default function PostCards({ post }) {
    return (
    <Link to={`/posts/${post.id}`}>
        <div className="post">
            <img src={`/assets/posts/${post.id}/capa.png`} alt="post.titulo" className="capa" />
          <h2 className="tituloCard">{post.titulo}</h2>

          <BotoesPrincipais>
            Ler
          </BotoesPrincipais>
        </div>
     </Link>
    );
}