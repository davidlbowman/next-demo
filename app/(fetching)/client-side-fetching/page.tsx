import { Product } from '../productData/productData'
import ProductList from '@/components/ProductList'

async function getProductData() {
    const res = await fetch('http://localhost:3000/productData')

    if (!res.ok) {
        throw new Error('Failed to fetch product data')
    }

    return res.json()
}

export default async function ClientSideFetchingPage() {
    const products: Product[] = await getProductData()

    return <ProductList products={products} />
}
