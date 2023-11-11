"use client";

import { Button } from "flowbite-react";

export default function Home() {
    return (
        <>
            <div
                className=" w-full min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"
                style={{ backgroundImage: 'url("/img/img_3.png")' }}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl items-center">
                    <div className="flex flex-col gap-9 items-center justify-center">
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <h1 className="text-6xl text-white font-bold font-serif">
                                UNLIMITED LUXURY
                            </h1>
                            <p className="text-2xl text-white">
                                FOR MIND, BODY AND SOUL
                            </p>
                            <hr />
                        </div>
                        <Button color="warning" pill size="lg">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
