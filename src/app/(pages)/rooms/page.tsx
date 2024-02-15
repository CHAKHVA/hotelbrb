import Room from "@/components/Room";

export default function Page() {
    const rooms: IRoom[] = [
        {
            id: 1,
            src: "/images/rooms/room1.jpeg",
            name: "Premium Suite",
            description: `Enjoy our classic suites with all the elegancy and comfort that its interior has... It features such essentials as a flat-screen 45" TV, WiFi and 2 bathrooms with a living room and 2 bedrooms...
                          Only 5 rooms are available
                          Breakfast included
                          Price does not include VAT & services fee`,
            price: 250,
        },
        {
            id: 2,
            src: "/images/rooms/room2.jpeg",
            name: "Single Suite",
            description: `Enjoy our classic suites with all the elegancy and comfort that its interior has... It features such essentials as a flat-screen 45" TV, WiFi and 2 bathrooms with a living room and 2 bedrooms...
                          Only 5 rooms are available
                          Breakfast included
                          Price does not include VAT & services fee`,
            price: 300,
        },
        {
            id: 3,
            src: "/images/rooms/room3.jpeg",
            name: "Family Suite",
            description: `Enjoy our classic suites with all the elegancy and comfort that its interior has... It features such essentials as a flat-screen 45" TV, WiFi and 2 bathrooms with a living room and 2 bedrooms...
                          Only 5 rooms are available
                          Breakfast included
                          Price does not include VAT & services fee`,
            price: 350,
        },
        {
            id: 4,
            src: "/images/rooms/room4.jpeg",
            name: "Double Suite",
            description: `Enjoy our classic suites with all the elegancy and comfort that its interior has... It features such essentials as a flat-screen 45" TV, WiFi and 2 bathrooms with a living room and 2 bedrooms...
                          Only 5 rooms are available
                          Breakfast included
                          Price does not include VAT & services fee`,
            price: 400,
        },
    ];

    return (
        <div className="container mx-auto p-4">
            {rooms.map((room: IRoom) => (
                <Room room={room} key={room.id} />
            ))}
        </div>
    );
}
