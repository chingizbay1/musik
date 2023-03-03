import React from "react";



const Header = () => {
    return (
        <div id="Header">
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <h1>UI.desk</h1>
                        <div className="logo-menu">
                            <div className="logo-men">
                                <a href="">Home</a>
                            </div>
                            <a href="">About</a>
                            <a href="">Contact</a>
                            <a href="">Testimonials</a>
                        </div>
                        <div className="logo-btn">

                            <button className="btn">Order Now</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Header;
