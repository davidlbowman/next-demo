import { NextResponse } from 'next/server'
import { productData } from './productData'

export async function GET() {
    try {
        if (!productData) {
            return NextResponse.json({ message: 'No data received' }, { status: 400 })
        }

        return NextResponse.json(productData)
    } catch (error) {
        console.error('Server Error:', error)

        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}
