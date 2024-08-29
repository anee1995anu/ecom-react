import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contcts from "./pages/Contcts";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

import Signup from "./pages/Signup";
import AddProduct from "./admin/pages/AddProduct";





function App() {
  return (
    <Router>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contcts/>}/>
      <Route path="/products" element={<Products/>}/>
     
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/admin/product/add" element={<AddProduct/>}/>
u


      
     </Routes>
     
      <Footer/>
      
    </Router>
  );
}

export default App;
