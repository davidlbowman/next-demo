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
        <div className='text-white flex flex-row gap-4'>
            <h2>{header}:</h2>
            <p className='text-white' onClick={incrementCounter}>
                {counter}
            </p>
        </div>
    )
}
