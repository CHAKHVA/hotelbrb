import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SocialLink from "@/app/components/SocialLink";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

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
                    <SocialLink
                        url={"https://www.facebook.com"}
                        icon={FacebookIcon}
                        bot={"bottom-20"}
                        color={"primary"}
                    ></SocialLink>
                    <SocialLink
                        url={"https://www.instagram.com"}
                        icon={InstagramIcon}
                        bot={"bottom-4"}
                        color={"error"}
                    ></SocialLink>
                </div>
            </body>
        </html>
    );
}
