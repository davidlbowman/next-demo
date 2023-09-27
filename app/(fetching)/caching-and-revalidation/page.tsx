import Image from 'next/image'
import { Product, productData } from '../productData/productData'

async function getTimeBasedRevalidationProductData() {
    try {
        const res = await fetch('http://localhost:3000/productData', { next: { revalidate: 3600 } })
        if (!res.ok) {
            throw new Error('Failed to fetch product data')
        }
        return res.json()
    } catch (error) {
        console.error(error)
        return productData
    }
}

export default async function CachingAndRevalidationPage() {
    const products: Product[] = await getTimeBasedRevalidationProductData()

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
                <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8'>
                    {products.map(product => (
                        <div key={product.id} className='group text-sm'>
                            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={250}
                                    height={250}
                                    className='h-full w-full object-cover object-center'
                                />
                            </div>
                            <h3 className='mt-4 font-medium text-gray-900'>{product.name}</h3>
                            <p className='mt-2 font-medium text-gray-900'>{`$${product.price}`}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
