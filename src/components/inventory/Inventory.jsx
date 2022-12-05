import React from "react";
import { NavLink } from "react-router-dom";
import Records from '../../inventory.json'

function Inventory() {
    return (
        <div>
            <h1>Inventory Page</h1>
            <p>All Vehicles For Sale</p>
            <div className="row">
                {
                    Records && Records.map(record => {
                        return (
                            <div className="column" key={record.id}>
                                <div className='content card' >
                                    <img style={{ width: "100%", height: "250px", objectFit: "cover" }} src={require(`../../${record.image_url}`)} alt="" />
                                    <h3>{record.Year} {record.Make} {record.Model}</h3>
                                    <br />
                                    <h2>{record.Price}</h2>
                                    <br />
                                    <p><span className="h3">Mileage: </span>{record.Mileage}</p>
                                    <br />
                                    <button>
                                        <NavLink to="/about">Learn More</NavLink>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Inventory;