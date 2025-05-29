import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            SINTAK <span className="text-purple-600">2024</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Pelatihan Web Development dengan React JS, Tailwind CSS, dan Vite
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                Daftar Sekarang
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="px-6 py-3 border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
                            >
                                Pelajari Lebih Lanjut <ChevronRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/placeholder.svg?height=400&width=500"
                            alt="SINTAK Event"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
