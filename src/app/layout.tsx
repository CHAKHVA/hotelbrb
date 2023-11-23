import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FAB from "@/app/components/FAB";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ["normal", "italic"],
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
                <div>
                    <Header />
                    {children}
                    <Footer />
                    <FAB />
                </div>
            </body>
        </html>
    );
}
