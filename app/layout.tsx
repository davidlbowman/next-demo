import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Counter from '@/components/Counter'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next.js Demonstration',
    description: 'Next.js demonstration for ReactATX by David Bowman.'
}

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='h-screen w-screen bg-gray-800'>
            <body className={`${inter.className} flex flex-col gap-4 m-4 lg:m-8`}>
                <Navbar
                    logo='/TailwindCSSLogo.svg'
                    alt='Tailwind CSS Logo'
                    width={30}
                    height={30}
                    navigation={navigation}
                />
                <Counter header='Layout Counter' />
                {children}
                <Footer companyName='React ATX' />
            </body>
        </html>
    )
}
