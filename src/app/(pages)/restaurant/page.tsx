import Image from "next/image";

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-around">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h2 className="text-3xl">Georgian Cuisine</h2>
                    <Image
                        width={500}
                        height={1500}
                        src="/menu.webp"
                        alt="Georgian Cuisine"
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <h2 className="text-3xl">European Cuisine</h2>
                    <Image
                        width={500}
                        height={1500}
                        src="/menu.webp"
                        alt="European Cuisine"
                    />
                </div>
            </div>
        </div>
    );
}
