import './Banner.css';
import circulo from 'assets/circulo_colorido.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function Banner() {
    return (
        <section className="banner">
            <div className="apresentacao">
                <h1 className="titulo">
                    Olá, Mundo!
                </h1>

                <p className="paragrafo">
                    Boas vindas ao meu espaço pessoal! Eu sou Douglas Araujo, aluno de Front-end da Alura. Aqui compartilho mais um projeto com meus conhecimentos em React, espero que aprenda algo novo :)
                </p>
            </div>

            <div className="imagens" >
                <img
                    className="circulo"
                    src={circulo}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className="minhaFoto" 
                    src={fotoSobreMim}
                    alt="Minha Foto"
                />
            </div>
        </section>
    )
}