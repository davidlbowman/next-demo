import { Product, productData } from '../productData/productData'
import ProductList from '@/components/ProductList'

async function getProductData() {
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

export default async function ClientSideFetchingPage() {
    const products: Product[] = await getProductData()
    return <ProductList products={products} />
}
