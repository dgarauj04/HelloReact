import "./PostModelo.css";

export default function PostModelo(props) {
    return (
<article className="postModeloContainer">
<div className="fotoCapa" style={{ backgroundImage: `url(${props.fotoCapa})` }} >
</div>

<h2 className="titulo">{props.titulo}</h2>

<div className="postConteudoContainer">
    {props.children}
</div>
</article>
    );
}