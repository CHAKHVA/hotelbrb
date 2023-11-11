export default function Contact() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <div className="text-2xl font-semibold mb-4">
                        Contact us
                    </div>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque eget commodo orci. Integer varius nibh eu
                        mattis porta.
                    </p>
                    <div className="mb-4">
                        <div>
                            The Grandium Hotel 41-49 Longridge Road, Earls
                            Court, London
                        </div>
                        <div>Phone: +1-800-123-45-67</div>
                        <div>Fax: +1-800-123-45-67</div>
                        <div>demolink@mail.org</div>
                    </div>
                </div>

                <div>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="border-2 border-gray-300 p-2"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="border-2 border-gray-300 p-2"
                            required
                        />
                        <textarea
                            placeholder="Message *"
                            className="border-2 border-gray-300 p-2"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
