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
                        bot={"bottom-96"}
                        color={"primary"}
                        logo={null}
                    ></SocialLink>
                    <SocialLink
                        url={"https://www.instagram.com"}
                        icon={InstagramIcon}
                        bot={"bottom-80"}
                        color={"error"}
                        logo={null}
                    ></SocialLink>
                    <SocialLink
                        url={"https://www.tiktok.com"}
                        icon={null}
                        bot={"bottom-64"}
                        color={"primary"}
                        logo={"/images/tiktok.webp"}
                    ></SocialLink>
                    <SocialLink
                        url={"https://www.booking.com"}
                        icon={null}
                        bot={"bottom-48"}
                        color={"primary"}
                        logo={"/images/booking.png"}
                    ></SocialLink>
                    <SocialLink
                        url={"https://www.expedia.com"}
                        icon={null}
                        bot={"bottom-32"}
                        color={"primary"}
                        logo={"/images/expedia.webp"}
                    ></SocialLink>
                </div>
            </body>
        </html>
    );
}
