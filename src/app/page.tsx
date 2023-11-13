"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
export default function Home() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat "
            style={{
                backgroundImage: "url('/img/img_3.png')",
            }}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-center">
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
                    <Link href="/contact">
                        <Button color="warning" pill size="lg">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
