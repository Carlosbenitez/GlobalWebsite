import React from "react"


function Services() {

    return (
        <>
            <h1 id=""><span id="">Our Services</span></h1>
            <ul className="serviceslists">
                <li>Fill customs import documentation</li>
                <li>Import Security FIling (ISF)(10+2)</li>
                <li>Custom clearance including but not limited to FDA, USDA,FCC, F&W, TIB, T&E</li>
                <li>C-TPAT certified</li>
                <li>Ocean Freight
                    <ul>
                        <li className="servicessublists">FCL</li>
                        <li className="servicessublists">LCL</li>
                        <li className="servicessublists">OOG</li>
                        <li className="servicessublists">Special equipment</li>
                    </ul>
                </li>
                <li>International & Domestic Air Frieght
                <ul>
                        <li className="sublists">Direct</li>
                        <li className="sublists">Consolidated</li>
                    </ul>
                </li>
                <li>Nationwide Domestic Trucking
                <ul>
                        <li className="sublists">Door to door</li>
                        <li className="sublists">Trans-load Capabilities</li>
                    </ul>
                </li>
                <li>Online Tracking, Custom Bonds, Delivery to final consignee, Customized reports, Remote filing, Duty drawbacks</li>
            </ul>
        </>

    )
}

export default Services