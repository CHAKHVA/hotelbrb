import Image from "next/image";

export default function Room({ room }: { room: IRoom }) {
    const isEvenRoom = (room.id + 1) % 2 === 0;

    return (
        <div
            className={`flex flex-col ${
                isEvenRoom ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-6 lg:gap-12 my-10`}
        >
            <div className="flex-1">
                <div className="relative w-full h-60 lg:h-96">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={room.src}
                        alt={room.name}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-medium mb-2">{room.name}</h2>
                    <p className="mb-2">{room.description}</p>
                </div>
                <div>
                    <p className="text-2xl font-medium mb-2">
                        {"$" + room.price + "/per night"}
                    </p>
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        Book a Room
                    </button>
                </div>
            </div>
        </div>
    );
}
