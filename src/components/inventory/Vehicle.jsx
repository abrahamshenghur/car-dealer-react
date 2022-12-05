import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Vehicle() {
    let { vehicleSlug } = useParams();

    useEffect(() => {
        // Fetch vehicle using the vehicleSlug
        fetchVehicles()
    }, [vehicleSlug]);

    function fetchVehicles() {
        // axios
        //   .get("https://shoppingapiacme.herokuapp.com/shopping")
        //   .then((res) => {
        //     console.log(res);
        //     setProducts(res.data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

          fetch('inventory.json').then(function(response){
            return response.json()
        }).then(function (obj) {
            console.log(obj)
        }).catch(function (error) {
            console.error("Something went wrong with retrieving the people!")
            console.error(error)
        })
      }

    return (
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg=7">
                        <img class="im-fluid rounded mb-4 mb-lg-0" src="http://place-hold.it/900x400" alt=""/>
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">About</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vehicle;