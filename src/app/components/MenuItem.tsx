import Image from "next/image";
import React from "react";

interface MenuItemProps {
    name: string;
    image: string;
    price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, image, price }) => {
    return (
        <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
            <div className="p-4 flex-grow">
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-lg">${price}</p>
            </div>
            <div className="flex-shrink-0">
                <Image
                    className="object-cover rounded-md p-4"
                    src={image}
                    alt={name}
                    width={200}
                    height={150}
                />
            </div>
        </div>
    );
};

export default MenuItem;
