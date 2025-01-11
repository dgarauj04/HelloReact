import "./BotoesPrincipais.css";

export default function BotoesPrincipais({ children }) {
    return (
        <button className="botao">{children}</button>
    );
}