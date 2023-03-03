import React from "react";
import roome from "../img/room1.png"
import roome1 from "../img/room12.png"
import roome2 from "../img/ro.png"
 const Run = () => {
     return (
         <div id="Run">
             <div className="container">
                 <div className="run">
                     <div className="room">
                         <h1>About US</h1>
                         <p>Organic food is grown without the use of <br/>
                             synthetic chemicals, such as human-made <br/>
                             pesticides and fertilizers, and does not contain
                             <br/> genetically modified organisms (GMOs).
                             <br/> Organic foods include fresh produce, meats,
                             <br/> and dairy products as well as processed foods <br/>
                             such as crackers, drinks, and frozen meals.</p>
                         <button className="btn-3">Learn More</button>
                     </div>
                     <div className="room-1">
                         <div className="room-2">
                             <img src={roome} alt=""/>
                             <div className="room-3">
                                 <img src={roome1} alt=""/>
                             </div>

                         </div>
                         <div className="room-4">
                             <img src={roome2} alt=""/>

                         </div>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 export default Run;