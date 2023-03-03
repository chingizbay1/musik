import './App.css';

import Header from "./compenenst/Header";
import Home from "./compenenst/Home";
import Some from "./compenenst/Some";
import Run from "./compenenst/Run";
import Hero from "./compenenst/Hero";
// import Domen from "./components/Domen";
// import Footer from "./components/Footer";
function App() {
    return(
        <div className="App">
            <Header/>
            <Home/>
            <Some/>
            <Run/>
            <Hero/>
        </div>
    );
}
export default App;
