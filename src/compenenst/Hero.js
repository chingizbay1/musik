import React from "react";
import log from "../img/cept.png"
import logoo from "../img/image 6.png"
import olog from "../img/Ellipse 11.png"
const Hero = () => {
    return (
        <div id="Hero">
            <div className="container">
                <div className="hero">
                    <img className="put" src={log} alt=""/>
                    <div className="hero-1">
                       <h1>Fresh Vegetables <br/>
                           Every Day</h1>
                        <p>Healthy life as informed declared we enjoy the <br/>
                            margaret. Joy horrible moreover man feelings <br/>
                            own shy. Request norland neither mistake for yet. <br/>
                            Between the for morning assured country <br/> believe.</p>
                        <button className="btn-4">Learn More</button>
                    </div>
                </div>
                <div className="hero-11">
                    <div>
                        <h2>Cooked by the <br/>
                            Best Chefs</h2>
                        <p1>Believing neglected so so allowance existence <br/>
                            departure in. In design active temper be uneasy. <br/>
                            Thirty for remove plenty regard you summer though. <br/>
                            He preference connection astonished on of ye.</p1>
                    </div>
                    <img className="jub" src={logoo} alt=""/>
                    <img className="job" src={olog} alt=""/>
                     </div>
            </div>
        </div>
    )
}




export default Hero;