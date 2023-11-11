import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";

const roboto = Roboto({
    weight: ["400", "500", "700", "900"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HotelBRB",
    description:
        "HotelBRB website to get to know more about our hotel and book rooms",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                {/*this div is for footer to be fixed on the button do not change!!! */}
                <div className="app">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
