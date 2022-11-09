import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "./containers/BlogPage/BlogPage";
import HomePage from './containers/HomePage/HomePage';
import ProductDetailsPage from './containers/ProductDetailsPage/ProductDetailsPage';
import CartPage from './containers/CartPage/CartPage';
import ShopPage from "./containers/ShopPage/ShopPage";
import AboutPage from "./containers/AboutPage/AboutPage";
import ShippingPage from "./containers/ShippingPage/ShippingPage";
import ContactPage from "./containers/ContactPage/ContactPage";
import ConfirmPage from "./containers/ConfirmPage/ConfirmPage";
import PaymentPage from "./containers/PaymentPage/PaymentPage";
import OrderSuccess from "./components/Carts/OrderSuccess";
import MyOrderPage from "./containers/OrderPage/MyOrderPage";
import OrderDetailPage from "./containers/OrderDetailsPage/OrderDetailPage";
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ShopPage />} />
        <Route exact path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/shipping" element={<ShippingPage />} />
        <Route exact path="/order/confirm" element={<ConfirmPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        <Route exact path="/orderSuccess" element={<OrderSuccess />} />
        <Route exact path="/orders" element={<MyOrderPage />} />
        <Route exact path="/order/:orderId" element={<OrderDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
