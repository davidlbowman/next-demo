import Counter from '@/components/Counter'

export default function LayoutVsTemplateLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className='flex flex-col gap-4'>
            <Counter header='Layout Header' />
            {children}
        </section>
    )
}
