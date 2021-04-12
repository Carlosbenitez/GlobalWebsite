import React from "react"
import FMC from "./img/FMC.jpg"
import CTPAT from "./img/CTPAT.png"
import NCBFAA from "./img/NCBFAA.png"
import NJBIA from "./img/NJBIA.png"
import USCustoms from "./img/USCustoms.jpg"

function Licenses() {

    return (
        <>
            <h1 id="licensesh1"><span >Licenses & Accreditation</span></h1>
            <div className="row">
            <div className="col-sm-auto center">
            <img src={CTPAT} alt="CTPAT" className="licensesimgs1"/>
            </div>
            <div className="col-sm-auto center">
            <img src={NCBFAA} alt="NCBFAA" className="licensesimgs1"/>
            </div>
            <div className="col-sm-auto center">
            <img src={NJBIA} alt="NJBIA" className="licensesimgs1"/>
            </div>
            </div>

            <div className="row">
            <div className="col-lg-auto center">
            <img src={FMC} alt="FMC" className="licensesimgs2"/>
            </div>
            <div className="col-lg-auto center">
            <img src={USCustoms} alt="US Customs and Border Protection" className="licensesimgs2"/>
            </div>
            </div>
        </>

    )
}

export default Licenses