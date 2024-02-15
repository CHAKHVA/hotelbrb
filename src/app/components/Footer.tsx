import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#171717] text-white py-4">
            <div className="container mx-auto px-4 text-sm">
                <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
                    <div className="mb-2 md:mb-0">
                        <Image
                            src="/images/logo.png"
                            alt="Hotel Logo"
                            width={120}
                            height={40}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:space-x-8">
                        <div className="flex space-x-3 mb-2 md:mb-0">
                            <Link href="/terms" className="hover:text-gray-400">
                                Terms of Service
                            </Link>
                            <Link
                                href="/privacy"
                                className="hover:text-gray-400"
                            >
                                Privacy Policy
                            </Link>
                        </div>

                        <div className="flex space-x-3">
                            <Link
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>

                    <p className="text-gray-400 mt-2 md:mt-0">
                        © 2024 HotelBRB
                    </p>
                </div>
            </div>
        </footer>
    );
}
