
"use client"
import Image from "next/image";
import {usePathname} from "next/navigation";


export default function HeaderImage(){
    const pathName = usePathname();


    return (<>
        <div className="absolute top-0 left-0 h-[50vh] w-[100%]">
            <Image
                src="/img/img_3.png"
                alt={"Header Image"}
                fill
                className="w-full top-0 left-0 object-cover"
            />
            <h1 className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-9xl text-center text-white capitalize">
                {pathName.slice(1)}
            </h1>
        </div>


    </>)



}