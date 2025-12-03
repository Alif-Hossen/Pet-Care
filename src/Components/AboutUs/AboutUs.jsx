import React from 'react';
import { FaPaw, FaHeart, FaShieldAlt, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 font-sans max-w-[1700px] mx-auto mt-14 rounded-2xl">
            <section className="rounded-2xl relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl max-w-[1700px] mx-auto">
                    <div className="text-center text-white p-6">
                        <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">Caring for Your Beloved Companions</h1>
                        <p className="text-xl md:text-2xl font-light leading-relaxed animate-slideUp">
                            Dedicated to the health, happiness, and well-being of every pet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section - Card Style */}
            <section className="container mx-auto px-6 py-16 max-w-[1700px] ">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 md:p-12 rounded-lg shadow-xl text-center relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <FaPaw className="absolute -top-10 -left-10 text-white opacity-20 text-9xl rotate-12" />
                    <FaHeart className="absolute -bottom-10 -right-10 text-white opacity-20 text-9xl -rotate-12" />
                    <h2 className="text-4xl font-bold mb-4 z-10 relative">Our Mission</h2>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto z-10 relative">
                        At PetCare, our mission is to provide unparalleled compassionate care for pets,
                        fostering a loving and healthy environment for them to thrive. We believe every pet
                        deserves the best, and we are committed to enriching their lives through expert services
                        and genuine affection.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section - Feature Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Pawsitive Care?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <FaShieldAlt className="text-5xl text-green-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expert & Compassionate Team</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our highly trained professionals treat every pet with the love and respect they deserve, ensuring their comfort and safety.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <FaAward className="text-5xl text-yellow-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Services</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From routine check-ups and grooming to specialized training and boarding, we offer a full spectrum of pet care solutions.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <FaLightbulb className="text-5xl text-purple-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modern Facilities</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our state-of-the-art facilities are designed to provide a secure, clean, and stimulating environment for all pets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section - Simple Example */}
            <section className="bg-gray-100 py-16 max-w-[1700px] mx-auto rounded-2xl">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Dedicated Team</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                                alt="Team Member Name"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Dr. Alif Rahman</h3>
                            <p className="text-blue-600">Lead Veterinarian</p>
                            <FaUsers className="text-gray-400 mt-3 text-3xl mx-auto" />
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D" 
                                alt="Team Member Name"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-300"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Ms. Fariha Islam</h3>
                            <p className="text-pink-600">Head Groomer</p>
                            <MdOutlinePets className="text-gray-400 mt-3 text-3xl mx-auto" />
                        </div>
                    </div>
                    <p className="mt-8 text-lg text-gray-700">
                        Our team is passionate about animals and dedicated to providing the best possible care.
                    </p>
                </div>
            </section>

            {/* Call to Action (Optional) */}
            <section className="bg-blue-600 text-white py-16 text-center max-w-[1700px] mx-auto rounded-2xl">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">Ready to Give Your Pet the Best Care?</h2>
                    <p className="text-xl mb-8">
                        Contact us today to learn more about our services and book an appointment.
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;