import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang SINTAK</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <img
                            src="/placeholder.svg?height=400&width=500"
                            alt="About SINTAK"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Membangun Dasar Website Development</h3>
                        <p className="text-gray-600 mb-6">
                            SINTAK adalah event pelatihan web programming yang dirancang untuk membantu Anda memahami dasar-dasar
                            pengembangan website modern. Dengan fokus pada teknologi terkini seperti React JS, Tailwind CSS, dan
                            Vite, Anda akan mempelajari cara membangun website yang responsif, cepat, dan menarik.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Event ini cocok untuk pemula maupun mereka yang ingin meningkatkan keterampilan dalam pengembangan web.
                            Anda akan dibimbing oleh instruktur berpengalaman yang akan membantu Anda memahami konsep-konsep penting
                            dalam pengembangan website.
                        </p>
                        <div className="flex items-center text-purple-600 font-medium">
                            <button onClick={() => scrollToSection("benefits")} className="flex items-center hover:underline">
                                Lihat Manfaat <ChevronRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
