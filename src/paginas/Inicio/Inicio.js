import './Inicio.css'
import posts from '../../json/posts.json'
import PostCards from '../../componentes/PostCards/PostCards';

export default function Inicio() {
    return (
<ul className="posts">
{posts.map((post) => (    
    <li key={post.id}>
       <PostCards post={post} />
    </li>
    ))}
    </ul>
    );
} 
 