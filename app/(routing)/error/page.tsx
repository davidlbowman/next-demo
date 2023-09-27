import throwError from '@/utils/throwError'

export default function ErrorPage() {
    // @ts-ignore
    Math.random() > 0.5 && throwError()

    return (
        <section className='bg-white px-6 py-32 lg:px-8 flex flex-col gap-4'>
            <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
                <p className='text-base font-semibold leading-7 text-indigo-600'>Introducing</p>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    Using error.tsx
                </h1>
                <p className='mt-6 text-xl leading-8'>
                    The `error.tsx` file in Next.js enables you to craft custom error pages to
                    manage different error types, like 404 Not Found or server-related issues. This
                    way, you can present a user-friendly interface with clear messages and potential
                    redirections to other parts of your application, thereby transforming error
                    experiences into informative and navigable moments.
                </p>
            </div>
        </section>
    )
}
