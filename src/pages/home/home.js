import React from "react"
import logo from "./img/GlobalFavicon.jpg"

function Home() {
    const cardInfo = [
        { id: 1, image: logo, title: "John Doe", position: "Customs Entry Writer", phone: "908-123-4567", email: "jdoe@gmail.com", alt: "The Company Logo" },

        { id: 2, image: logo, title: "Carlos Benitez", position: "Consultant", phone: "201-123-4567", email: "cbenitez@gmail.com", alt: "The Company Logo" },

        { id: 3, image: logo, title: "Dominika Pankowski", position: "Customs Specialist", phone: "908-123-7777", email: "dpankowski@gmail.com", alt: "The Company Logo" },

    ];


    const renderCard = (card, index) => { 
        return (
            <div className="col-sm-8 col-md-4 col-lg-4" key={card.id}>
                <div className="content">
                    <img src={card.image} alt={card.alt} id="homeprofileimg"/>
                    <h2>{card.title}</h2>
                    <p>{card.position}</p>
                    <p>{card.phone}</p>
                    <p>{card.email}</p>
                </div>
            </div>)
    }
    return (
        <>
            <div className="pimg1">
                <div className="ptext">
                    <span className="border">
                        Global Customs Services LLC
                    </span>
                </div>
            </div>

            <section className="section section-light">
                <h1 id="homequote"> Customs Brokerage with the customer in mind!</h1>
                <p id="homeabout">Global Customs Services LLC. is a full service Customs Broker. With a combined experience of over 75 years, Global Customs Services LLC. provides the import community with a unique advantage in assisting you in all your import needs.
                </p>
            </section>


            <div className="pimg1">
                <div className="ptext">
                    <span className="border">
                        Meet the Team!
                    </span>
                </div>
            </div>

            <section className="section section-light">
                <div className="row">
                    {cardInfo.map(renderCard)}
                </div>
            </section>
        </>
    )
}

export default Home