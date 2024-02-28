import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footer-div">
                    <div className="socialmedia-weblogo">
                        <img src="./images/main_logo.png" />
                        <div>Super class, cute, comfortable. Youcan wear them with just aboutanything.</div>
                        <br />
                        <div className="social-media">
                            <div className="social-media-insta">
                                <Link><img src="./images/insta-logo.png" /></Link>
                            </div>
                            <div className="social-media-facebook">
                                <Link><img src="./images/facebook-logo.png" /></Link>
                            </div>
                            <div className="social-media-linkedin">
                                <Link><img src="./images/linkedin-logo.png" /></Link>
                            </div>
                            <div className="social-media-twitter">
                                <Link><img src="./images/twitter-logo.png" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="company-detail">
                        <h2>Company</h2>
                        <br/>
                        <div className="company-divs">
                            <br />
                            <br />
                            <div className="address-website">184 Main Rd E, St AlbansVIC 3021, Australia</div>
                            <br />
                            <div className="contact-website">
                                +84 (0)387 392 056 hello@domain.com
                            </div>
                           
                        </div>
                        <div className="arrow"><img src="./images/down-arrow.png"/></div>
                    </div>
                   
                    <div className="company-information">
                        <h2>Information</h2>
                        <br/>
                        <div className="information-divs">
                            <div>Register</div>
                            <div>Login</div>
                            <div>Mycart</div>
                            <div>Wishlist</div>
                            <div>Product Compare</div>
                        </div>
                        <div className="arrow"><img src="./images/down-arrow.png"/></div>
                    </div>
                    <div className="company-contact">
                        <h2>Contact</h2>
                        <br/>
                        <div className="contact-divs">
                            <div>About us</div>
                            <div>Contact us</div>
                            <div>FAQs</div>
                            <div>Blog</div>
                        </div>
                        <div className="arrow"><img src="./images/down-arrow.png"/></div>
                    </div>
                    <div className="company-services">
                        <h2>Services</h2>
                        <br/>
                        <div className="services-divs">
                            <div>Privicy Policy</div>
                            <div>Refund Policy</div>
                            <div>Shipping & Return</div>
                            <div>Terms Condition</div>
                        </div>
                        <div className="arrow"><img src="./images/down-arrow.png"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;