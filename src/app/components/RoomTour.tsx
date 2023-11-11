
"use client"


// @ts-ignore
import { Pannellum, PannellumVideo } from "pannellum-react";
import React, { useEffect } from 'react';




import "./RoomTour.css"

export default function RoomTour({className = ""} : {className?: string})  {


    const image = "/360-img/360_panorama_-_Initial_room_in_Hovhannes_Tumanyan_house_museum_in_Dsegh.jpg"

    {/*imageTest is used for testing only */}
    const imageTest = "/img/img_3.png"

    return (
        <div className={"room-tour-container " + className}>





            <Pannellum
                width="100%"
                height="100%"
                image={image}
                maxHfov = {100}
                pitch={10}
                yaw={180}
                hfov={110}
                showFullscreenCtrl = {false}
                showZoomCtrl = {false}
                autoLoad
                onLoad={() => {
                    console.log("panorama loaded");
                }}
            >
            </Pannellum>

        </div >
    );
};

