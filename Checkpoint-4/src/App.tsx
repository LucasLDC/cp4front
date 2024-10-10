import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetalhesProdutos from "./Components/DetalhesProdutos/DetalhesPordutos"
import Error404 from "./Components/Error404/Error404"
import Home from "./Components/Home/Home"
import LayoutPadrao from "./Components/LayoutPadrao/LayoutPadrao"
import Produtos from "./Components/Produtos/Produtos"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPadrao></LayoutPadrao>}>
            <Route index element={<Home></Home>} />
            <Route path="/Produtos" element={<Produtos></Produtos>}></Route>
            <Route path="/DetalhesProdutos" element={<DetalhesProdutos></DetalhesProdutos>}></Route>
          </Route>
          <Route path="/Error404" element={<Error404></Error404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
