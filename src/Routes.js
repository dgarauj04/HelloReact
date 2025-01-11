import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio/Inicio";
import SobreMim from "./paginas/SobreMim/SobreMim";
import Menu from "./componentes/Menu/Menu";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";
import Post from "paginas/Post/Post";
import NaoEncontrada from "paginas/NaoEncontrada/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Menu />

    <Routes>
<Route path="/" element={<PaginaPadrao />}>
  <Route index element={<Inicio />} />
  <Route path="sobremim" element={<SobreMim />} />
</Route>

<Route path="posts/:id" element={<Post />} />
<Route path="*" element={<NaoEncontrada />} />
    </Routes>

    <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
