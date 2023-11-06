import Image from "next/image";

export default function Room({ room }: { room: IRoom }) {
    return (
        <div
            className={`flex ${
                room.float ? "flex-row" : "flex-row-reverse"
            } gap-3`}
        >
            <div>
                <Image
                    width={500}
                    height={300}
                    src={room.src}
                    alt={room.name}
                    className="rounded"
                />
            </div>
            <div>
                <h2 className="text-3xl font-medium mb-2">{room.name}</h2>
                <p>{room.description}</p>
            </div>
        </div>
    );
}
