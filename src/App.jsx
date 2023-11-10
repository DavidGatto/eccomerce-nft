import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { Home } from "./components/pages/Home/Home";
import { CartContainer } from "./components/pages/Cart/CartContainer";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import { Layout } from "./components/layouts/Layout";
import CartContextComponent from "./Context/CartContext";
import Checkout from "./components/pages/Checkout/Checkout";
import { Login } from "./components/pages/Login/Login";
import { UserContextComponent } from "./Context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotFound } from "./components/common/NotFound/NotFound";
import { SearchProvider } from "./Context/searchContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <UserContextComponent>
          <SearchProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/store" element={<ItemListContainer />} />
                <Route
                  path="/category/:categoryName"
                  element={<ItemListContainer />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route
                  path="/itemDetail/:id"
                  element={<ItemDetailContainer />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
          </SearchProvider>
        </UserContextComponent>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
