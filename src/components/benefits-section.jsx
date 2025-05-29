import React from 'react'
import { Award, Code, Laptop, Mail, Users } from 'lucide-react'


export default function BenefitsSection() {
    return (
        <section id="benefits" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manfaat Mengikuti SINTAK</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Dapatkan berbagai keuntungan dengan mengikuti pelatihan web development SINTAK
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <Code size={24} className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Kurikulum Modern</h3>
                        <p className="text-gray-600">
                            Pelajari teknologi terbaru dalam pengembangan web seperti React JS, Tailwind CSS, dan Vite yang banyak
                            digunakan di industri.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <Laptop size={24} className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Praktek Langsung</h3>
                        <p className="text-gray-600">
                            Belajar dengan metode hands-on di mana Anda akan langsung mempraktekkan apa yang dipelajari dengan
                            membuat proyek nyata.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <Users size={24} className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Networking</h3>
                        <p className="text-gray-600">
                            Bertemu dengan sesama peserta dan instruktur yang dapat memperluas jaringan profesional Anda di bidang
                            teknologi.
                        </p>
                    </div>

                    {/* Benefit 4 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <Award size={24} className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Sertifikat</h3>
                        <p className="text-gray-600">
                            Dapatkan sertifikat resmi setelah menyelesaikan pelatihan yang dapat menambah nilai pada CV Anda.
                        </p>
                    </div>

                    {/* Benefit 5 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <Mail size={24} className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Dukungan Pasca Pelatihan</h3>
                        <p className="text-gray-600">
                            Dapatkan akses ke grup diskusi dan materi tambahan setelah pelatihan selesai untuk terus mengembangkan
                            keterampilan Anda.
                        </p>
                    </div>

                    {/* Benefit 6 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <Code size={24} className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Portofolio Proyek</h3>
                        <p className="text-gray-600">
                            Bangun portofolio proyek web yang dapat Anda tunjukkan kepada calon pemberi kerja atau klien di masa
                            depan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
