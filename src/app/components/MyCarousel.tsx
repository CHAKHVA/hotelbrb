import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function MyCarousel({
    className = "",
    photos = undefined,
}: {
    className?: string;
    photos?: { src: string }[];
}) {
    !photos
        ? (photos = [
              {
                  src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
              },
              {
                  src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
              },
              {
                  src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
              },
              {
                  src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
              },
              {
                  src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
              },
          ])
        : "";

    return (
        <div className={"h-56 sm:h-64 xl:h-80 2xl:h-96 " + className}>
            <Carousel>
                {photos.map((ph, index) => (
                    <Image
                        width={100}
                        height={100}
                        key={ph.src}
                        src={ph.src}
                        alt=""
                    />
                ))}

                {/* {photos.map((ph, index) =>
                    <img  key={index} src={ph.src} alt=""/>
                )}*/}
            </Carousel>
        </div>
    );
}
