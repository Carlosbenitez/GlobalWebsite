import React from "react"
import { Link } from "react-router-dom"
import GlobalLogo from "./img/GlobalLogo.jpg"

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm">
            <title className="navbar-brand"> <img id="navbarimg" alt="Business meeting background"src={GlobalLogo}/></title>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/GlobalWebsite" className="nav-item nav-link active">Home</Link>
                    {/* <Link to="/GlobalWebsite/about" className="nav-item nav-link">About</Link> */}
                    <Link to="/GlobalWebsite/services" className="nav-item nav-link active">Services</Link>
                    <Link to="/GlobalWebsite/licenses" className="nav-item nav-link active">Licenses</Link>
                    <Link to="/GlobalWebsite/blog" className="nav-item nav-link active">Blog</Link>
                    <Link to="/GlobalWebsite/contact" className="nav-item nav-link active">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav