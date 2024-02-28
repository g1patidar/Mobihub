
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Orderdetail from "./pages/Orderdetails";
import Cartpage from "./pages/cartpage";
import Productdetail from "./pages/Productdetail";
import Paymentpage from "./pages/paymentpage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Wishlist from "./pages/Wishlist";
import Admin_Home from "./Admin_pages/Admin_Home"
import All_products from "./Admin_pages/All_products";
import AddProduct from "./Admin_pages/Addproduct";
import Coupon from "./Admin_pages/Coupon";
import ManageAddress from "./pages/ManageAddress";
import Admin_Order_detail from "./Admin_pages/Admin_Order_detail";
import Brand from "./Admin_pages/Brand";
import Shop from "./pages/Shop";
import Admin_Layout from "./Admin_Layout";
import Admin_Footer from "./Admin_pages/Admin_components/Admin_Footer";
import Admin_Header from "./Admin_pages/Admin_components/Admin_Header";

import ProductCard from "./pages/components/ProductCard";

// Css part
import "./css/Home.css";
import "./css/Home_mediaquery.css"
import "./css/Header.css"
import "./css/Footer.css"
import "./css/Login.css"
import "./css/cart.css"
import "./css/Orderdetails.css"
import "./css/OrderDetailsmediaqueries.css"
import "./css/loginmediaqueries.css"
import "./css/Registration.css"
import "./css/registrationmediaqueries.css"
import "./css/productdetail.css"
import "./css/Wishlist.css"
import "./Admin_css/Admin_Home.css"
import "./Admin_css/All_products.css"
import "./Admin_css/Header.css"
import "./Admin_css/Footer.css"
import "./Admin_css/All_pages_option.css"
import "./Admin_css/AddProduct.css"
import "./Admin_css/Coupon.css"
import "./css/manageaddress.css"
import "./Admin_css/Admin_Order_detail.css"
import "./Admin_css/Brand.css"
import "./css/shop.css"
import "./css/ProductCard.css"
import "./css/Phonepe.css"
import "./css/COD.css"
import "./css/CreditCard.css"
import "./css/Upi.css"





const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cartpage" element={<Cartpage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/Orderdetail" element={<Orderdetail />} />
            <Route path="/manageaddress" element={<Orderdetail />} />
            <Route path="/buynow" element={<Paymentpage />} />

          </Route>
          <Route path="/loginpage" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

        </Routes>

        <Routes>
          <Route path="/admin_layout" element={<Admin_Layout />}>
            <Route index element={<Admin_Home />} />
            <Route path="/admin_layout/admin_home" element={<Admin_Home />} />
            <Route path="/admin_layout/admin_addproduct" element={<AddProduct />} />
            <Route path="/admin_layout/admin_brand" element={<Brand />} />
            <Route path="/admin_layout/admin_coupon" element={<Coupon />} />
            <Route path="/admin_layout/admin_oderdetail" element={<Admin_Order_detail />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )

}
export default App;