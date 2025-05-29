import React from 'react'

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Peserta</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Apa kata mereka yang telah mengikuti pelatihan SINTAK sebelumnya
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                                <img src="/placeholder.svg?height=48&width=48" alt="Testimonial" width={48} height={48} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Budi Santoso</h4>
                                <p className="text-sm text-gray-500">Mahasiswa Teknik Informatika</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            "SINTAK memberikan saya pemahaman yang solid tentang React JS dan Tailwind CSS. Sekarang saya bisa
                            membuat website yang responsif dan menarik dengan lebih cepat."
                        </p>
                        <div className="flex text-yellow-400 mt-4">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                                <img src="/placeholder.svg?height=48&width=48" alt="Testimonial" width={48} height={48} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Dewi Lestari</h4>
                                <p className="text-sm text-gray-500">UI/UX Designer</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            "Sebagai designer, SINTAK membantu saya memahami bagaimana desain saya diimplementasikan dalam kode.
                            Sekarang saya bisa berkomunikasi lebih baik dengan developer."
                        </p>
                        <div className="flex text-yellow-400 mt-4">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                                <img src="/placeholder.svg?height=48&width=48" alt="Testimonial" width={48} height={48} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Ahmad Rizki</h4>
                                <p className="text-sm text-gray-500">Frontend Developer</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            "Meskipun saya sudah bekerja sebagai developer, SINTAK memberikan saya wawasan baru tentang Vite dan
                            cara mengoptimalkan performa website. Sangat bermanfaat!"
                        </p>
                        <div className="flex text-yellow-400 mt-4">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
