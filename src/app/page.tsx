"use client"
import Image from 'next/image'
import Link from "next/link";
import {Button} from "flowbite-react";

export default function Home() {
  return (
      <>
        <div className=" w-full min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"
             style={{ backgroundImage: 'url("/img/img_3.png")'}}>






          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl items-center font-serif">
            <h1>UNLIMITED LUXURY</h1>
              <Button>Learn more</Button>
              <hr/>

          </div>
        </div>
  </>)
}
