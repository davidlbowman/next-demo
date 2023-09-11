import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
    logo: `${string}.svg` | `${string}.webp`
    alt: string
    width: number
    height: number
    navigation?: {
        name: string
        href: string
    }[]
}

export default function Navbar({ logo, alt, width, height, navigation }: NavbarProps) {
    return (
        <nav className='flex flex-row gap-8 bg-gray-800' aria-label='Main Navigation'>
            <Image src={logo} alt={alt} width={width} height={height} priority />
            {navigation && (
                <ul className='flex gap-16'>
                    {navigation.map(item => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className='text-white text-sm font-medium place-self-center'
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
