import React from "react"


function Services() {

    return (
        <>
            <h1 className="customh1" id="servicesh1"><span >Our Services</span></h1>
            
            <ul className="serviceslists">
            <div className = "row">
            <div className ="column">
            <li><span className="servicestext">Nationwide customs clearance</span></li>
                <li><span className="servicestext">Import Security FIling (ISF)(10+2)</span></li>
                <li><span className="servicestext">Custom clearance including but not limited to FDA, USDA, F&W, TIB, T&E</span></li>
                <li><span className="servicestext">Nationwide Domestic Trucking</span>
                <ul>
                        <li className="servicessublists"><span className="servicestext">Door to door</span></li>
                        <li className="servicessublists"><span className="servicestext">Trans-load Capabilities</span></li>
                    </ul>
                </li>
                </div>
                <div className ="column">

                <li><span className="servicestext">International Air Frieght</span>
                </li>
                <li><span className="servicestext">Ocean Freight</span>
                    <ul>
                        <li className="servicessublists"><span className="servicestext">FCL</span></li>
                        <li className="servicessublists"><span className="servicestext">LCL</span></li>
                        <li className="servicessublists"><span className="servicestext">OOG</span></li>
                        <li className="servicessublists"><span className="servicestext">Special equipment</span></li>
                    </ul>
                </li>
                <li><span className="servicestext">Online Tracking, Custom Bonds, Delivery to final consignee, Customized reports, Duty drawbacks</span></li>
                </div>
                </div>
            </ul>      
        </>

    )
}

export default Services