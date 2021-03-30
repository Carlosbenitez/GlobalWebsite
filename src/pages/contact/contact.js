import React from "react"




function Contact() {
    function sendTo() {
        window.location.href = "mailto:carlosbenitez86753@yahoo.com?subject=" + document.getElementById('Subject').value + "&body=" +
            document.getElementById('Message').value + " Thank you, "  + document.getElementById('Name').value
        window.alert("Thank you for your message!");
    }

    return (
        <>


            <div id="contentback">
                <h1 id="contacth1"><span id="contacth1bg">Contact Us!</span></h1>
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
        </>
    )
}

export default Contact