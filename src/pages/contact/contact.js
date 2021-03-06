import React from "react"
import logo from "./img/GlobalFavicon.jpg"



function Contact() {
    const cardInfo = [
        { id: 1, image: logo, title: "Diane Sutera", position: "Customs House Broker", email: "diane-sutera@glship.com", alt: "The Company Logo" },

        { id: 2, image: logo, title: "Antoinette McKnight", position: "Customs Operations Manager", email: "antoinette-mcknight@glship.com", alt: "The Company Logo" },


    ];

    const renderCard = (card, index) => { 
        return (
            <div className="col-sm-8 col-md-4 col-lg-4 center" key={card.id}>
                <div className="content cardtext">
                    <img src={card.image} alt={card.alt} id="contactprofileimg"/>
                    <h2 id="cardtitle">{card.title}</h2>
                    <p className="cardp">{card.position}</p>
                    <p className="cardp">{card.email}</p>
                </div>
            </div>)
    }

    function sendTo() {
        window.location.href = "mailto:carlosbenitez86753@yahoo.com?subject=" + document.getElementById('Subject').value + "&body=" +
            document.getElementById('Message').value + " Thank you, "  + document.getElementById('Name').value
        window.alert("Thank you for your message.");
    }

    return (
        <>


            <div id="contentback">
                <h1 className="customh1" id="contacth1"><span >Contact Us</span></h1>
                <hr />
                <form id="contactform">
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" id="Name" placeholder="Name" />
                    </div>

                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" id="Subject" placeholder="Subject" />
                    </div>

                    <div className="form-group col-md-6">
                        <textarea className="form-control" id="Message" rows="8" placeholder="Write your message here:"></textarea>
                        <br />
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" id="contactbutton" onClick={sendTo}>Submit</button>
                </form>
            </div>
            <div className="row" id="contactcards">
                    {cardInfo.map(renderCard)}
                </div>
        </>
    )
}

export default Contact