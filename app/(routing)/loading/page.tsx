import Image from 'next/image'
import delay from '@/utils/delay'

export default async function LoadingPage() {
    const imageString = await delay({
        resource: '/loadedBlueOwl.webp',
        milliseconds: 2500
    })

    return (
        <section className='flex place-content-center'>
            <Image
                className='rounded-xl bg-gray-50 object-cover'
                src={imageString}
                alt='Loaded Blue Owl'
                width={512}
                height={512}
            />
        </section>
    )
}
