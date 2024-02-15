import Image from "next/image";
import React from "react";

interface MenuItemProps {
    name: string;
    image: string;
    price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, image, price }) => {
    return (
        <div className="relative group max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
            <Image
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                src={image}
                alt={name}
                width={100}
                height={50}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <div>
                    <p className="text-xl font-semibold text-white">{name}</p>
                    <p className="text-lg text-gray-300">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
