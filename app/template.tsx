import Counter from '@/components/Counter'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col gap-4'>
            <Counter header='Template Counter' />
            {children}
        </div>
    )
}
