"use client";

import React, { useState } from "react";
import MenuItem from "@/components/MenuItem";
import restaurant_menu from "@/data/restaurant_menu.json";

const RestaurantMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    return (
        <div className="py-8 px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                    className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                        selectedCategory === null
                            ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </button>
                {restaurant_menu.menu.map(({ category }) => (
                    <button
                        key={category}
                        className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                            selectedCategory === category
                                ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {restaurant_menu.menu
                    .filter(
                        ({ category }) =>
                            selectedCategory === null ||
                            category === selectedCategory
                    )
                    .flatMap(({ items }) =>
                        items.map((item) => (
                            <MenuItem key={item.name} {...item} />
                        ))
                    )}
            </div>
        </div>
    );
};

export default RestaurantMenu;
