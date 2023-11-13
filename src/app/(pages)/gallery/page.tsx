import GalleryGrid from "../../components/GalleryGrid";

export default function Page() {
    const images: ImageData[] = [];
    return (
        <div className="py-10">
            <h1 className="text-center text-4xl font-semibold mb-10">
                Gallery
            </h1>
            <GalleryGrid images={images} />
        </div>
    );
}
