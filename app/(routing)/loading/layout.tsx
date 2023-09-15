export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-white px-6 py-32 lg:px-8 flex flex-col gap-4'>
            <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
                <p className='text-base font-semibold leading-7 text-indigo-600'>Introducing</p>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    Using loading.tsx
                </h1>
                <p className='mt-6 text-xl leading-8'>
                    The loading.tsx file in Next.js serves as a centralized place to manage what is
                    displayed to the user during data fetching or route transitions. By using this
                    file, you can implement custom loading indicators or placeholders that provide a
                    smoother user experience. This allows your web application to feel more
                    responsive and user-friendly, even when dealing with latency or slow network
                    conditions.
                </p>
            </div>
            {children}
        </div>
    )
}
