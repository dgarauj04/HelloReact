import PostModelo from "componentes/PostModelo/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import "./SobreMim.css";

function SobreMim() {
    return (
<PostModelo fotoCapa={fotoCapa} titulo="Sobre mim" >

    <h3 className="subtitulo">Olá, sou o Douglas!</h3>

    <img src="https://github.com/dgarauj04.png" alt="minha foto do github" className="fotoSobreMim"/>
    
            <p className="paragrafo">
Oi, tudo bem? Sou um estudante da formação Front-end na Alura e quero expressar minha gratidão por ter a oportunidade de aprender em uma plataforma tão incrível e completa.  
</p>
            <p className="paragrafo">
Desde pequeno, sempre tive uma grande atração pela tecnologia, especialmente pelo universo tech. Fosse explorando o desenvolvimento de projetos ou criando materiais relacionados à tecnologia, esse mundo sempre me fascinou. Com o passar dos anos, fui me dedicando cada vez mais, aprimorando minhas habilidades e buscando conhecimento em programação.
</p>
            <p className="paragrafo">
Já faz um ano de experiência prática em programação Front-end, adquirida por meio da realização de diversos cursos reconhecidos como a Alura. Meu foco principal é na área de Front-end, onde sinto que posso expressar minha criatividade e paixão pela construção de interfaces incríveis. Porém, também venho explorando o Back-end e desenvolvendo competências que me permitem atuar com versatilidade.
</p>
            <p className="paragrafo">
Meu objetivo é aplicar tudo o que tenho aprendido e continuar evoluindo como desenvolvedor. Sou uma pessoa esforçada e comprometida, sempre buscando melhorar minhas técnicas e contribuir de forma significativa para o universo da tecnologia. 
 </p>
</PostModelo>
    );
}

export default SobreMim;