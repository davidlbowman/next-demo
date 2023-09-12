import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next.js Demonstration',
    description: 'Next.js demonstration for ReactATX by David Bowman.'
}

const navigation = [
    { name: 'Layout', href: '/layout' },
    { name: 'Template', href: '/layout/template' },
    { name: 'Layout vs. Template', href: '/layout/template/layout-vs-template' },
    { name: 'Error', href: '/error' },
    { name: 'Loading', href: '/loading' },
    { name: 'Not Found', href: '/not-found' }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} flex flex-col gap-4 m-4 lg:m-8`}>
                <Navbar
                    logo='/TailwindCSSLogo.svg'
                    alt='Tailwind CSS Logo'
                    width={30}
                    height={30}
                    navigation={navigation}
                />
                {children}
                <Footer companyName='React ATX' />
            </body>
        </html>
    )
}
