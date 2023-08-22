import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import Nosotros from "./components/Nosotros"
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";
import Carrito from "./components/Carrito";
import Check from "./components/Check";


function App() {

 


  return (
    <div>
      <CartProvider>
      <BrowserRouter>

      <NavBar/>

      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/productos/:categoria" element={<ItemListContainer />} />
      <Route path="/Nosotros" element={<Nosotros />}/>
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/check" element={<Check />} />
      
      </Routes>

      
      
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
