'use client'

import { useState } from 'react'

interface CounterProps {
    header: string
    initialCount?: number
}

export default function Counter({ header, initialCount = 0 }: CounterProps) {
    const [counter, setCounter] = useState(initialCount)

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    return (
        <div
            key={header}
            className='overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border-gray-800 border-2 select-none'
            onClick={incrementCounter}
        >
            <dt className='truncate text-sm font-medium text-gray-500'>{header}</dt>
            <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>{counter}</dd>
        </div>
    )
}
