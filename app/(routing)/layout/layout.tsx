import Link from 'next/link'
import Counter from '@/components/Counter'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className='flex flex-col gap-4'>
            <div className='bg-white px-6 py-24 sm:py-32 lg:px-8 flex flex-col gap-4'>
                <div className='mx-auto max-w-2xl text-center flex flex-col gap-8'>
                    <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                        Layout vs. Template
                    </h2>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        In Next.js, pages are unique UI components defined in `page.js` files, while
                        layouts in `layout.js` files offer shared elements across these pages. The
                        Root Layout sets the foundation with HTML and body tags. Templates in
                        `template.tsx` files serve as an intermediary, re-initializing state and
                        effects as users navigate, offering route-specific behaviors. Click below to
                        switch between the /layout and /layout/template routes to test state and
                        effect re-initialization.
                    </p>
                    <div className='flex flex-row gap-8 text-2xl font-bold tracking-tight text-blue-700 sm:text-4xl place-content-center'>
                        <Link href='/layout/'>Layout</Link>
                        <Link href='/layout/template/'>Template</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 place-items-center'>
                {children}
                <Counter header='layout.tsx' />
            </div>
        </section>
    )
}
