import Image from "next/image";
import HeaderImage from "@/app/components/HeaderImage";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <HeaderImage/>
            <main className="mt-[30vh]">{children}</main>
        </div>
    );
}
