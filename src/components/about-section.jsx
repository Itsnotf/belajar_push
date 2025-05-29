import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Tentang Website Ini
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Website ini dibuat sebagai media pembelajaran untuk memahami berbagai
          <strong> sintaks dasar dalam pemrograman</strong>. Kamu bisa
          mempelajari struktur kode, fungsi, dan logika pemrograman dengan
          penjelasan yang sederhana dan mudah dipahami. Cocok untuk pemula yang
          ingin belajar dari nol.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-10">
          <div>
            <h3 className="text-4xl font-bold text-violet-600">50+</h3>
            <p className="text-gray-500">Topik Sintaks</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-violet-600">100+</h3>
            <p className="text-gray-500">Contoh Kode</p>
          </div>
        </div>
      </div>
    </section>
  );
}
