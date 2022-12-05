import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="white bg-black">
            <div className='flex flex-wrap justify-evenly footer'>
                <div className="left-align">
                    <h3 className="primary">CONTACT US</h3>
                    <p>
                        <span className="gray">PHONE:</span>
                        <br />
                        (555) 555-5555
                    </p>
                    <p>
                        <span className="gray">EMAIL:</span>
                        <br />
                        <a href='https://www.google.com' className='white'>info@dealersite.com</a>
                    </p>
                    <p>
                        <span className="gray">ADDRESS:</span>
                        <br />
                        123 Maple St.
                        <br />
                        Somewhere, SS 38382
                    </p>
                </div>
                <div className="left-align">
                    <h3 className="primary">OPENING HOURS</h3>
                    <p className="gray">(By appointment)</p>
                    <p>
                        <span className="gray">MON: </span>
                        9:00am - 5:30pm
                        <br />
                        <span className="gray">TUE: </span>
                        9:00am - 5:30pm
                        <br />
                        <span className="gray">WED: </span>
                        9:00am - 5:30pm
                        <br />
                        <span className="gray">THU: </span>
                        9:00am - 5:30pm
                        <br />
                        <span className="gray">FRI: </span>
                        9:00am - 5:30pm
                        <br />
                        <span className="gray">SAT: </span>
                        9:00am - 5:30pm
                        <br />
                        <span className="gray">SUN: </span>
                        CLOSED
                        <br />
                    </p>
                </div>
                <div className="left-align">
                    <h3 className="primary">LINKS</h3>
                    <ul className="list-style-none">
                        <li>
                            <NavLink className="white" to="/home">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink className="white" to="/inventory">INVENTORY</NavLink>
                        </li>
                        <li>
                            <NavLink className="white" to="/about">CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink className="white" to="/contact">ABOUT</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="primary">SOCIAL MEDIA</h3>
                    <ul className="list-style-none">
                        <li>
                            <a className="white" href="https://www.youtube.com">Youtube</a>
                        </li>
                        <li>
                            <a className="white" href="https://www.facebook.com">Facebook</a>
                        </li>
                        <li>
                            <a className="white" href="https://www.instagram.com">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;