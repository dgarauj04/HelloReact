import './NaoEncontrada.css';
import erro404 from 'assets/erro_404.png'
import BotoesPrincipais from 'componentes/BotoesPrincipais/BotoesPrincipais';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <section>
            <div className="conteudoContainer">
                <span className="texto404">404</span>

                <h1 className="titulo">
                    Ops! Página não encontrada.
                </h1>

                <p className="paragrafo">
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className="paragrafo">
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div
                    className="botaoContainer"
                    onClick={() => navegar(-1)}
                >
                    <BotoesPrincipais>
                        Voltar
                    </BotoesPrincipais>
                </div>

                <img
                    className="imagemCachorro"
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className="espacoEmBranco"></div>
        </section>

    );
}