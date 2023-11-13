"use client";

import MyCarousel from "@/app/components/MyCarousel";
import MySlider from "@/app/components/MySlider";
import "./about.css";
import Image from "next/image";

import { Map, Marker } from "pigeon-maps";
import RoomTour from "@/app/components/RoomTour";

export default function Page() {
    let icons = [
        {
            src: "/hotel-pngs/icon-01.png",
            header: "Large Bed",
            text: "Large double bed will make your sleep sound and refreshing.",
        },
        {
            src: "/hotel-pngs/mt-0867-about-icons02.png",
            header: "Free Wi-Fi",
            text: "Our guests can use Wi-Fi for free throughout the hotel territory.",
        },
        {
            src: "/hotel-pngs/mt-0867-about-icons03.png",
            header: "Air Conditioning",
            text: "Large double bed will make your sleep sound and refreshing",
        },
        {
            src: "/hotel-pngs/mt-0867-about-icons04.png",
            header: "Private Bathroom",
            text: "Private bathroom and toilets are to your service, no additional payment is required",
        },
        {
            src: "/hotel-pngs/mt-0867-about-icons05.png",
            header: "Free Mini-bar",
            text: "Mini-bar is refilled with soft drinks and snacks every day",
        },
        {
            src: "/hotel-pngs/mt-0867-about-icons06.png",
            header: "Sofa Available",
            text: "Use a comfortable sofa if you just want to relax for a short period of time.",
        },
    ];

    let staff = [
        {
            src: "/staff-photos/mt-0867-about-img01.jpg",
            name: "Aaron Thompson",
            position: "General Manager",
        },
        {
            src: "/staff-photos/mt-0867-about-img02.jpg",
            name: "Michelle Perkins",
            position: "Executive Head Chef",
        },
        {
            src: "/staff-photos/mt-0867-about-img03.jpg",
            name: "Kathleen Pierce",
            position: "Reception Manager",
        },
        {
            src: "/staff-photos/mt-0867-about-img04.jpg",
            name: "Kathryn Dean",
            position: "Front of House Manager",
        },
    ];

    return (
        <>
            <RoomTour className={"h-10 w-28"} />
            <div className={"about-block py-28 px-36"}>
                <h2
                    className={
                        "flex-1 direction-rtl m-0 p-16 md:text-5xl sm:text-4xl "
                    }
                >
                    The best place to enjoy your life
                </h2>

                <p className={"flex-1"}>
                    Sed pellentesque pulvinar arcu ac congue. Sed sed est nec
                    justo maximus blandit. Curabitur lacinia, eros sit amet
                    maximus suscipit, magna sapien venenatis eros, et gravida
                    urna massa ut lectus. Quisque lacinia lacinia viverra.
                    Nullam nec est et lorem sodales ornare a in sapien. In et
                    urna maximus, consectetur ligula in, gravida erat. Nullam
                    dignissim hendrerit auctor. Sed varius, dolor vitae iaculis
                    condimentum, massa nisl cursus sapien, gravida ultrices nisi
                    dolor non erat. pillentesque sodales sed nisl eget
                    dignissim. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas
                </p>
            </div>

            <div className={"about-block-grid even-bg-color "}>
                {icons.map((icon) => (
                    <div key={icon.src} className={"about-block-grid-div "}>
                        <Image
                            width={100}
                            height={100}
                            src={icon.src}
                            className={"flex-1"}
                            alt={"icon"}
                        />

                        <div className={"icon-text"}>
                            <h4 className={"font-serif"}>{icon.header}</h4>
                            <p>{icon.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={"about-block py-40 px-60"}>
                <div className={"flex-1"}>
                    <h2 className={" my-8 md:text-4xl sm:text-3xl"}>
                        Our Philosophy
                    </h2>
                    <div>
                        <p className={"my-3"}>
                            A visitor is a king for each employee of this hotel.
                            You deserve the best comfort - a well-designed and
                            silent room with a comfy bed. Is that you need,
                            visiting any hotel? Right? So that’s exactly what we
                            bring to those who come to us.
                        </p>

                        <br />

                        <p>
                            We have only one simple rule - do everything for a
                            visitor you host! These words know every employee of
                            our hotel. We love what we do, we do it perfectly
                            and enjoy helping people feel themselves like home.
                        </p>
                    </div>
                </div>

                <div className={"flex-1"}>
                    <h2 className={"my-8  md:text-4xl sm:text-3xl"}>
                        Our Mission
                    </h2>
                    <div>
                        <p className={"my-3"}>
                            The mission of our hospitality business is changing
                            the industry forever with new technologies and
                            totally new perspective on the hotel business. We
                            want you to feel satisfied during all time of your
                            staying that’s why we are always in touch with the
                            visitors of our hotel. You can contact us anytime
                            via our website and ask for advice, make a
                            suggestion and describe any other issue.
                        </p>

                        <p>
                            The mission of our staff and management is providing
                            top class service to the visitors of our resort and
                            all over the network. The total amount of our
                            hospitality establishments is growing each year.
                            Every place is unique, where each person can find
                            something for oneself.
                        </p>
                    </div>
                </div>
            </div>

            <div className={"about-block even-bg-color flex-col py-28"}>
                <p className={"font my-5"}>TEAM</p>

                <h2 className={"my-8  md:text-4xl sm:text-3xl 2xl:text-6xl"}>
                    Our Staff
                </h2>
                <p>
                    They bring you high-quality service 365 days a year. Meet
                    our team of professionals in hotel industry.
                </p>
                <div className={"flex m-10"}>
                    {staff.map((comp) => (
                        <div
                            key={comp.src}
                            className={
                                "m-6 flex flex-col items-center mx-14 text-center"
                            }
                        >
                            <Image
                                src={comp.src}
                                height={100}
                                width={100}
                                alt={""}
                                className={"rounded-full staff-img"}
                            />
                            <h3>{comp.name}</h3>
                            <p>{comp.position}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={"map-container"}>
                <Map
                    height={300}
                    defaultCenter={[42.20384733142519, 42.714614903336674]}
                    defaultZoom={11}
                >
                    <Marker
                        width={50}
                        anchor={[42.20384733142519, 42.714614903336674]}
                    />
                </Map>
            </div>
        </>
    );
}
