"use client";

export default function SocialLink({
    url,
    icon,
    bot,
    color,
}: {
    url: string;
    icon: any;
    bot: string;
    color: string;
}) {
    const IconComponent = icon;
    return (
        <button
            onClick={() => window.open(url, "_blank")}
            className={`fixed ${bot} right-4 bg-transparent hover:bg-gray-300 transition-all text-white font-bold rounded-full shadow-lg p-4`}
        >
            <IconComponent color={`${color}`} />
        </button>
    );
}
