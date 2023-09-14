import Image from 'next/image'

export default function Loading() {
    return (
        <section className='flex place-content-center'>
            <Image
                className='rounded-xl bg-gray-50 object-cover'
                src='/preloadedOrangeOwl.webp'
                alt='Preloaded Orange Owl'
                width={512}
                height={512}
            />
        </section>
    )
}
