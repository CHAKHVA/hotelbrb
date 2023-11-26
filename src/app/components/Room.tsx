import Image from "next/image";
import Link from "next/link";

export default function Room({ room }: { room: IRoom }) {
    const isEvenRoom = (room.id + 1) % 2 === 0;

    return (
        <div
            className={`flex flex-col ${
                isEvenRoom ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8 lg:gap-16 p-4 lg:py-8 lg:px-12 my-10 bg-white shadow-lg rounded-lg`}
        >
            <div className="flex-1">
                <div className="w-full h-auto rounded-lg">
                    <Image
                        src={room.src}
                        alt={room.name}
                        sizes="100%"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        width={500}
                        height={300}
                        className="rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                        {room.name}
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        {room.description}
                    </p>
                </div>
                <div>
                    <p className="text-2xl lg:text-3xl font-semibold mb-4">
                        {"$" + room.price + "/per night"}
                    </p>
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        <Link href={`/contact`}>Book a Room</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
