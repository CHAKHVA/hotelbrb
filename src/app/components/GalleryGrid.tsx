import Image from "next/image";
import React from "react";

const images = Array.from({ length: 15 }).map((_, index) => ({
    src: `https://picsum.photos/seed/${index + 1}/600/400`,
    caption: `Image ${index + 1}`,
}));

const ImageGallery = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                    >
                        <Image
                            src={image.src}
                            alt={`Gallery image ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <p className="text-white text-lg font-medium">
                                {image.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
