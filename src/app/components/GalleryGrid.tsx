import Image from "next/image";

export default function GalleryGrid({ images }: { images: ImageData[] }) {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={300}
                            objectFit="cover"
                            layout="responsive"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
