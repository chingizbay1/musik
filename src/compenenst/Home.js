import React from "react";
import logo from "../img/header Image.png"


const Home = () => {
    return (
        <div id="Home">
            <div className="container">
                <div className="home">
                    <div className="home-on">
                        <h1>Just Eat healthy <br/> food to live a <br/> healthier life</h1>
                        <p>Enjoy a healthy life by eating healthy foods <br/>
                            that have extraordinary flavors that make <br/>
                            your life healthier for today and in the future</p>
                        <button className="btn-2">Order Now</button>
                    </div>
                    <img className="photo   " src={logo} alt=""/>

                </div>
            </div>
        </div>
    )
}

export default Home