import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <header className="bg-primary">
            <div className="flex flex-column">
                <div className="secondary">
                    <div className="left">
                        <NavLink to="/">
                            <img style={{height: "50px"}} src={ require('../images/logos/logo-1.jpg') }/>
                        </NavLink>
                    </div>
                    <div className="right">Contact</div>
                    <div className="right">Social Media</div>
                </div>
                <div className="bg-secondary">
                    <ul className="flex justify-around list-style-none h3 caps">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/inventory">Inventory</NavLink></li>
                        <li><NavLink to="/about">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navigation