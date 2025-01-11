import { Routes, Route, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "componentes/PostModelo/PostModelo";
import "./Post.css";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";
import PostCards from "componentes/PostCards/PostCards";

export default function Post() {
const parametros = useParams();
const post = posts.find((post) => {
    return post.id === Number(parametros.id)
});

if (!post) {
  return <NaoEncontrada/>;
}

const postRecomendado = posts
  .filter((post) => post.id !== Number(parametros.id))
  .sort((a, b) => b.id - a.id)
  .slice(0, 4);


return (
  <Routes>
    <Route path="*" element={<PaginaPadrao/>}>
      <Route index element={
        <PostModelo 
        fotoCapa={`/assets/posts/${post.id}/capa.png`} 
        titulo={post.titulo}>   
    <div className="post-markdown-container">
     <ReactMarkdown>
        {post.texto}
     </ReactMarkdown>
    </div>

<h2 className="tituloPostRecomendado">Outros  posts que você pode gostar:</h2>

<ul className="postRecomendado">  
  {postRecomendado.map((post) => (
    <li key={post.id}>
      <PostCards post={post}/>
    </li>
  ))}
</ul>
       </PostModelo> 
      } />
     </Route>
  </Routes>   

  )
}