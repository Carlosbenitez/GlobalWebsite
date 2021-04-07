import React from "react"
import FMC from "./img/FMC.jpg"
import CTPAT from "./img/CTPAT.png"
import NCBFAA from "./img/NCBFAA.png"
import NJBIA from "./img/NJBIA.png"

function Licenses() {

    return (
        <>
            <h1 id="licensesh1"><span >Licenses & Credentials</span></h1>
            <div className="row">
            <div className="column">
            <img src={FMC} alt="Flowers in Chania" className="licensesimgs"/>
            </div>
            <div className="column">
            <img src={CTPAT} alt="Flowers in Chania" className="licensesimgs"/>
            </div>
            <div className="column">
            <img src={NCBFAA} alt="Flowers in Chania" className="licensesimgs"/>
            </div>
            <div className="column">
            <img src={NJBIA} alt="Flowers in Chania" className="licensesimgs"/>
            </div>
            </div>
        </>

    )
}

export default Licenses