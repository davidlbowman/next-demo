'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

export interface FormData {
    firstName: string
    lastName: string
    email: string
}

export default function FormPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()

            response.ok
                ? console.log('Server Response:', data)
                : console.error('Server returned an error:', response)
        } catch (error) {
            console.error('Error submitting data:', error)
        }
    }

    return (
        <form className='bg-white p-4 rounded' onSubmit={handleSubmit}>
            <div className='space-y-12 '>
                <div className='border-b border-gray-900/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900'>
                        Contact Form:
                    </h2>

                    <div className='sm:col-span-3'>
                        <label
                            htmlFor='firstName'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            First name
                        </label>
                        <div className='mt-2'>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='firstName'
                                id='firstName'
                                autoComplete='givenName'
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>

                    <div className='sm:col-span-3'>
                        <label
                            htmlFor='lastName'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            Last name
                        </label>
                        <div className='mt-2'>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='lastName'
                                id='lastName'
                                autoComplete='family-name'
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>

                    <div className='sm:col-span-4'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            Email address
                        </label>
                        <div className='mt-2'>
                            <input
                                onChange={handleChange}
                                id='email'
                                name='email'
                                type='email'
                                autoComplete='email'
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                    Submit
                </button>
            </div>
        </form>
    )
}
