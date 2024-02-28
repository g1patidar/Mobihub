import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            {/* Desktop screen view */}
            <nav className="size_navbar">
                <div className="upper_navbar">
                    <div style={{display:"flex"}}>
                        <div className="gmail_icon_and_email">
                            <img src="./images/gmail3.png" />
                            <span>Email : jeevan@123gmail.com</span>
                        </div>
                        <div className="call_icon_and_call_support">
                            <img src="./images/call.png" />
                            <span>Call Support : 1234567890</span>
                        </div>
                    </div>
                    <div></div>
                    <div className="Wishlist_checkout_login">
                        <div className="wishlist_upper_nav">
                            <Link to="wishlist">
                                <img src="./images/wishlist.png" />
                                <span>My Wishlist</span>
                            </Link>
                        </div>
                        <div className="checkout_upper_nav">
                            <Link to="admin_layout">
                                <img src="./images/checkout1.png" />
                                <span>Admin</span>
                            </Link>
                        </div>
                        <div className="login_upper_nav">
                            <Link to="loginpage">
                                <img src="./images/userimg.png" />
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* lower navbar */}

                <div className="Lower_navbar">
                    <div className="web_logo">
                        <div>
                            <Link to="home"><img src="./images/main_logo.png" /></Link>
                        </div>
                    </div>
                    <div className="all_pages_on_navbar">
                        <div className="pages_name_carticon">
                            <div className="all_pages_click">
                                <Link to="home"><li>Home</li></Link>
                                <Link to="shop"><li>Shop</li></Link>
                                <Link><li>Blog</li></Link>
                                <Link><li>Contact Us</li></Link>
                                <Link><li>About Us</li></Link>

                            </div>
                            <div className="carticon_on_header">
                                <Link to="cartpage"><img src="./images/cart.png" /></Link>
                            </div>
                        </div>
                        <div className="search_on_header_category">
                            <div className="search_on_header">
                                <div style={{ display: "flex" }}>
                                    <input id="search_on_header" placeholder="Search Products" type="text" />
                                    <label className="searchicon_on_header" for="search_on_header"><img src="./images/search.png" width="25px" height="25px" /></label>
                                </div>
                            </div>
                            <div className="category_on_header">
                                <div className="category_div_header">
                                    <span>Category</span>
                                    <span className="arrowicon_header">
                                        <Link> <img src="./images/downside.png" /></Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </nav>

            {/* mobile_view_navbar */}

            <nav className="Mobile_view_navbar">
                <div className="upper_navbar_mobile_view">
                    <div className="weblogo_menu_button_mobile_view">
                        <div className="menu_button_mobile_view">
                            <img width="100%" height="100%" src="./images/menu__icon.png" />
                        </div>
                        <div className="weblogo_button_mobile_view">
                            <Link>
                                <img width="100%" height="100%" src="./images/main_logo.png" />
                            </Link>
                        </div>
                    </div>
                    <div></div>
                    <div className="login_cart_icon_mobile_view">
                        <Link to="loginpage">
                            <span>SignIn</span>
                            <div className="user_img_icon_mobile_view">
                                <img width="100%" height="100%" src="./images/userimg.png" />
                            </div>
                        </Link>
                        <Link to="cartpage">
                            <div className="cart_img_icon_mobile_view">
                                <img width="100%" height="100%" src="./images/cart.png" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="input_search_box_searchicon">
                    <div className="input_search_box5">
                        <input id="search_on_mobile_view" type="text" placeholder="Search here" />
                    </div>
                    <label for="search_on_mobile_view" className="searchicon_box5">
                        <img width="100%" height="100%" src="./images/search.png" />
                    </label>
                </div>
            </nav>
        </>
    )
}
export default Header;