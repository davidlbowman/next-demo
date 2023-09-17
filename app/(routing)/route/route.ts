import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const reqData = await request.json()

        if (!reqData) {
            return NextResponse.json({ message: 'No data received', status: 400 }, { status: 400 })
        }

        console.log('Received Data:', reqData)

        return NextResponse.json({ message: 'Data received successfully' })
    } catch (error) {
        console.error('Server Error:', error)

        return NextResponse.json({ message: 'Internal Server Error', status: 500 }, { status: 500 })
    }
}
