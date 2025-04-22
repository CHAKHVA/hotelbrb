import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope } from "react-icons/fa";
import { Resend } from "resend";

export default function Contact() {
    async function sendEmail(formData: FormData) {
        "use server";

        const resend = new Resend(process.env.RESEND_API_KEY);

        const senderEmail = formData.get("email") || "";
        const fullName = formData.get("name") || "";
        const phoneNumber = formData.get("phone") || "";
        const adults = formData.get("adults") || "";
        const children = formData.get("children") || "";
        const startDate = formData.get("start") || "";
        const endDate = formData.get("end") || "";
        const comment = formData.get("comment") || "";

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "info@hotelbrb.ge",
            subject: fullName.toString() + " რეზერვაცია",
            html:
                "<p>Email: " +
                senderEmail +
                "</p><p>Full Name: " +
                fullName +
                "</p><p>Number: " +
                phoneNumber +
                "</p><p>Adults: " +
                adults +
                "</p><p>Children: " +
                children +
                "</p><p>Start Date: " +
                startDate +
                "</p><p>End Date: " +
                endDate +
                "</p><p>Comment: " +
                comment +
                "</p>",
        });
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-gray-800">
                    <div className="text-4xl font-semibold mb-6">
                        Contact us
                    </div>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque eget commodo orci. Integer varius nibh eu
                        mattis porta.
                    </p>
                    <div className="mb-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-blue-600" />
                            <span>
                                The Grandium Hotel 41-49 Longridge Road, Earls
                                Court, London
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-blue-600" />
                            <span>Phone: +1-800-123-45-67</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaFax className="text-blue-600" />
                            <span>Fax: +1-800-123-45-67</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-blue-600" />
                            <span>demolink@mail.org</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                    <form
                        className="flex flex-col space-y-6"
                        action={sendEmail}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name *"
                            className="border-2 border-gray-300 p-3 rounded-md"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            className="border-2 border-gray-300 p-3 rounded-md"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number *"
                            className="border-2 border-gray-300 p-3 rounded-md"
                            required
                        />
                        <div className="flex items-center justify-between">
                            <input
                                type="number"
                                name="adults"
                                placeholder="Number of Adults"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                                min="1"
                            />
                            <input
                                type="number"
                                name="children"
                                placeholder="Number of Children"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                                min="0"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                type="date"
                                name="start"
                                placeholder="Check-in Date"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                            />
                            <input
                                type="date"
                                name="end"
                                placeholder="Check-out Date"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                            />
                        </div>
                        <textarea
                            placeholder="Comment"
                            name="comment"
                            className="border-2 border-gray-300 p-3 rounded-md h-32 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
