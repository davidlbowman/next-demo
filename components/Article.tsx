import { ArticleSkeleton } from '@/app/(content)/blog/[category]/categoryData'

export default function Article({ id, title, author, date, content }: ArticleSkeleton) {
    return (
        <section className='bg-white px-6 py-32 lg:px-8'>
            <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
                <p className='text-base font-semibold leading-7 text-indigo-600'>Introducing</p>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    JavaScript for Beginners
                </h1>
                <p className='mt-6 text-xl leading-8'>
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit
                    dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac.
                    Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla
                    sapien.
                </p>
            </div>
        </section>
    )
}
