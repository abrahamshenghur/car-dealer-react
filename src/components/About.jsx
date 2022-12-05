import React from "react";
import { useState, useEffect } from 'react'
import Records from './testInventory.json'



function About() {

    // const [showPosts, setShowPosts] = useState()

    // const apiRrl = '../inventory.json'

    // let displayData

    // function pullJson() {
    //     fetch(apiRrl)
    //     .then(response => response.json())
    //     .then(responseData => {
    //         displayData = responseData.map(function(todo) {
    //             return(
    //                 <p key={todo.id}>{todo.Make}</p>
    //             )
    //         })
    //         console.log(responseData)
    //         setShowPosts(displayData)
    //     })
    // }

    // useEffect(() => {
    //     pullJson()
    // }, [])

    let imageGallery=[
        {src: "./inventory 1", title: "img1"},
        {src: "./inventory 2", title: "img2"},
        {src: "./inventory 3", title: "img3"},
        {src: "./inventory 3", title: "img3"},
        {src: "./inventory 3", title: "img3"},
    ]

    return (
        <>
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg=7">
                        {/* <img class="im-fluid rounded mb-4 mb-lg-0" src="http://place-hold.it/900x400" alt=""/> */}
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">About</h1>
                        <p>
                            {
                                imageGallery.map((index) => 
                                    <p>{index.src}</p>
                                )
                            
                            }


                        </p>
                    </div>

                    <div className='inner'>
                {
                    Records && Records.map(record => {
                        return (
                            <div className='box' key={ record.id }>
                                {/*Ideally, use src={ record.icon }, and put images folder in public directory, 
                                in order to link to proper json key-value pair and eliminate need for require method; 
                                however, images kept in current directory for folder organization*/}
                                <img style={{height: "50px"}} src={ require(`../${record.image_url}`) } alt="" />
                                <br />
                                { record.Make }
                            </div>
                        )
                    })
                }
            </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default About;

// https://www.youtube.com/watch?v=d0Fpwvnv67s&list=PL4tmBn9TPbRqDZp7NDO-9SIrJMc0d8NaG&index=6&ab_channel=RewriteMyWebApp