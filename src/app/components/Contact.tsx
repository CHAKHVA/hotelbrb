import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope } from "react-icons/fa";

export default function Contact() {
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
                    <form className="flex flex-col space-y-6">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="border-2 border-gray-300 p-3 rounded-md"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="border-2 border-gray-300 p-3 rounded-md"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number *"
                            className="border-2 border-gray-300 p-3 rounded-md"
                            required
                        />
                        <div className="flex items-center justify-between">
                            <input
                                type="number"
                                placeholder="Number of Adults"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                                min="1"
                            />
                            <input
                                type="number"
                                placeholder="Number of Children"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                                min="0"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                type="date"
                                placeholder="Check-in Date"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                            />
                            <input
                                type="date"
                                placeholder="Check-out Date"
                                className="border-2 border-gray-300 p-3 rounded-md w-[50%]"
                            />
                        </div>
                        <textarea
                            placeholder="Comment"
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
