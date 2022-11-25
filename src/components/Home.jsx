import React from "react";

function Home() {
    return (
        <main style={{backgroundColor: "white", padding: "1rem 0"}}>
            {/* <!-- ============================================ -->
            <!--                    TOP IMAGE                 -->
            <!-- ============================================ --> */}
            <section class="flex" >
                <div class="top-image bg-image-overlay h1 secondary">
                    THE BEST CARS MONEY CAN BUY
                </div>
            </section>

            {/* <!-- ============================================ -->
            <!--                SECTION THUMBNAILS            -->
            <!-- ============================================ --> */}
            <section >
                <div class="flex flex-wrap justify-around h2 secondary" >
                    <div class="clickable-container bg-image-overlay thumbnail-image-1">
                        OUR STORY
                        <a href="/about.html"><span class="link layer"></span></a>
                    </div>
                    <div class="clickable-container bg-image-overlay thumbnail-image-2">
                        INVENTORY
                        <a href="/inventory.html"><span class="link layer"></span></a>
                    </div>
                    <div class="clickable-container bg-image-overlay thumbnail-image-3">
                        TRADE-IN
                        <a href="/trade-in.html"><span class="link layer"></span></a>
                    </div>
                </div>
            </section>

            {/* <!-- ============================================ -->
            <!--             DESCRIPTION OVERLAY 1            -->
            <!-- ============================================ --> */}
            <section>
                <div class="description-overlay-bg-image-1">
                    <div class="right bg-black muted-85 secondary" style={{width: "41.7%", minHeight: "410px"}}>
                        <h2 class="primary">TRADE-IN</h2>
                        <p>
                            San J Motors strives to offer you the fairest deal on your trade-in. We will call or email you to schedule an appointment to inspect your vehicle and make you an offer. We pride ourselves on our friendly sales and support staff and will always treat you and your vehicle with respect.
                        </p>
                        <button class="bg-primary">
                            <a class= "secondary"  href="/trade-in.html">TRADE-IN</a>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- ============================================ -->
            <!--             DESCRIPTION OVERLAY 2            -->
            <!-- ============================================ --> */}
            <section>
                <div class="description-overlay-bg-image-2">
                    <div class="left bg-primary muted-85 secondary" style={{width: "41.7%", minHeight: "410px"}}>
                        <h2>WE BUY CARS</h2>
                        <p>
                            Here at San J Motors, when selling your car to us, we strive to make your life easier with our carefully structured process that requires you to do the minimum, while getting as much value out of the deal as possible.
 
                            Selling your car to us, is not only fast, safe and convenient, we also ensure that you have a pleasant experience with our friendly, trustworthy and highly trained staff.
                        </p>
                        <button style={{backgroundColor: "black"}}>
                            <a class= "white"  href="/we-buy-cars.html">WE BUY CARS</a>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- ============================================ -->
            <!--                    SHOWROOM                  -->
            <!-- ============================================ --> */}
            <section>
                <div>
                    <div class="flex justify-between">
                        <div>
                            <h2>
                                <span class="black">FEATURED VEHICLES</span>
                            </h2>
                        </div>
                        <div>
                            <button>VIEW ALL</button>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-around">
                        <div class="flex flex-column">
                            <img style={{width: "240px"}} src="https://www.friendsgreenporsche.com/wp-content/uploads/2022/04/IMG_2528-scaled.jpg"></img>
                            <hw>Porsche 911 997.2 Carrera S PDK</hw>
                            <h4>$39,997</h4>
                            <p>
                                <a href="/Inventory/Vehicle">Read More</a>
                            </p>
                        </div>
                        <div class="flex flex-column">
                            <img style={{width: "240px"}} src="https://www.friendsgreenporsche.com/wp-content/uploads/2022/04/IMG_2528-scaled.jpg"></img>
                            <hw>Porsche 911 997.2 Carrera S PDK</hw>
                            <h4>$39,997</h4>
                            <p>
                                <a href="/Inventory/Vehicle">Read More</a>
                            </p>
                        </div>
                        <div class="flex flex-column">
                            <img style={{width: "240px"}} src="https://www.friendsgreenporsche.com/wp-content/uploads/2022/04/IMG_2528-scaled.jpg"></img>
                            <hw>Porsche 911 997.2 Carrera S PDK</hw>
                            <h4>$39,997</h4>
                            <p>
                                <a href="/Inventory/Vehicle">Read More</a>
                            </p>
                        </div>
                        <div class="flex flex-column">
                            <img style={{width: "240px"}} src="https://www.friendsgreenporsche.com/wp-content/uploads/2022/04/IMG_2528-scaled.jpg"></img>
                            <hw>Porsche 911 997.2 Carrera S PDK</hw>
                            <h4>$39,997</h4>
                            <p>
                                <a href="/Inventory/Vehicle">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;