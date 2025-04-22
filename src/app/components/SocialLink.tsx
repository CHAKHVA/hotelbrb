"use client";

export default function SocialLink({
    url,
    icon,
    bot,
    color,
    logo,
}: {
    url: string;
    icon: any;
    bot: string;
    color: string;
    logo: string | null;
}) {
    const IconComponent = icon;
    return (
        <button
            onClick={() => window.open(url, "_blank")}
            className={`fixed bottom- ${bot} right-4 bg-transparent hover:bg-gray-300 transition-all text-white font-bold rounded-full shadow-lg p-4`}
        >
            {logo ? (
                <img src={logo} alt="logo" className="h-6 w-6 object-contain" />
            ) : (
                <IconComponent color={`${color}`} />
            )}
        </button>
    );
}
