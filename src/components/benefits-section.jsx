import React from 'react'
import { Award, Code, Laptop, Mail, Users } from 'lucide-react'


export default function BenefitsSection() {
    return (
        <section id="benefits" className="py-20 bg-gray-50">
           <div className='container mx-0 min-h-screen space-y-10 flex flex-col md:flex-row md:mx-10  w-full'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-start mt-10 gap-y-4'>
                    <h1 className='text-4xl font-mono font-bold'>Belajar React</h1>
                    <h1 className='text-sm font-mono'>Belajar React Disintak Itu Seru banget!</h1>
                    <div className='flex flex-row gap-5'>
                        <button className='border px-6 rounded-md'>Contact</button>
                        <button className='border px-6 w-fit rounded-md'>Belajar Sekarang!</button>
                    </div>
                </div>
                <div className='w-full md:1/2 flex justify-center items-center '>
                    <img src="/vite.svg" alt="" className='w-1/2 md:h-1/2' />
                </div>
            </div>
        </section>
    )
}
