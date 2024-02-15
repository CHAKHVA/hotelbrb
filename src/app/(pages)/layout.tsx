import HeaderImage from "@/components/HeaderImage";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <HeaderImage />
            <main>{children}</main>
        </div>
    );
}
