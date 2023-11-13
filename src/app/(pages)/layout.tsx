import Image from "next/image";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="absolute block top-0 left-0 h-[50vh] w-[100vw]">
                <Image
                    src="/img/img_3.png"
                    alt={"Header Image"}
                    fill
                    className="w-full top-0 left-0 object-cover"
                />
                <h1 className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-9xl text-center text-white capitalize">
                    {children?.props?.childProp.segment}
                </h1>
            </div>
            <main className="mt-[50vh]">{children}</main>
        </div>
    );
}
