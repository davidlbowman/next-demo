import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <section className='mx-auto w-full px-6 pb-16 pt-10 sm:pb-24 lg:px-8 bg-white'>
            <Link
                href='/'
                className='flex flex-col mx-auto mt-8 max-w-2xl place-items-center sm:mt-24 gap-4'
            >
                <p className='text-base font-semibold leading-8 text-indigo-600'>404</p>
                <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                    This page does not exist
                </h1>
                <p className='mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8 text-center'>
                    Sorry, we could not find the page you are looking for.
                    <br />
                    Click anywhere to return to the home page.
                </p>
                <Image
                    className='rounded-xl bg-gray-50 object-cover'
                    src='/sad404Owl.webp'
                    alt='Sad Preloaded Owl'
                    width={512}
                    height={512}
                />
            </Link>
        </section>
    )
}
