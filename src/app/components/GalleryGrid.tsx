import Image from "next/image";

export default function GalleryGrid({ images }: { images: ImageData[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div key={index} className="grid gap-4">
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src={image.src}
                        alt={`Gallery image ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
}
