interface ParallelRoutesProps {
    children: React.ReactNode
    resources: React.ReactNode
    press: React.ReactNode
}

export default function RootLayout({ children, resources, press }: ParallelRoutesProps) {
    return (
        <section className='flex flex-row gap-8 '>
            {resources}
            {press}
            {children}
        </section>
    )
}
