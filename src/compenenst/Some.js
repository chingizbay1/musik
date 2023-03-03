import React from "react";
import logo1 from "../img/Vector.svg"
import logo2 from "../img/Vector (1).svg"
import logo3 from "../img/Vector (2).svg"


const Some = () => {
    return (
        <div id="Some">
            <div className="container">
                <div className="come">
                    <div className="lada">
                        <div className="lada-1">
                            <h1>Why Choose US?</h1>
                        </div>
                        <div className="lada-1">
                            <p>Organic food is grown without the use of synthetic chemicals</p>
                        </div>
                        <div className="use">
                            <div className="use-text">
                                <img className="poto" src={logo1} alt=""/>
                                <h1>Easy to order</h1>
                                <p>foods include fresh produce, <br/> meats as well as processed</p>
                            </div>
                            <div className="use-text">
                                <img className="poto" src={logo2} alt=""/>
                                <h1>100% Organic</h1>
                                <p>Organic food is grown without <br/> the use of synthetic chemicals</p>
                            </div>
                            <div className="use-text">
                                <img className="poto" src={logo3} alt=""/>
                                <h1>Easy to order</h1>
                                <p>foods include fresh produce, <br/> meats as well as processed</p>
                            </div>
                        </div>
                        <div className="china">
                            <div className="china-text">
                                <h1>40+</h1>
                                <p>Food Partners</p>
                            </div>
                            <div className="china-text">
                                <h1>459+</h1>
                                <p>Trusted Clients</p>
                            </div>
                            <div className="china-text">
                                <h1>12k+</h1>
                                <p>Order Online</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Some;