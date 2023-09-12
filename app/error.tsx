'use client'

import { useEffect } from 'react'

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-white text-2xl'>Error</h2>
            <p className='text-white'>{error.message}</p>
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={reset}
            >
                Reset
            </button>
        </div>
    )
}
