export interface Product {
    id: number
    name: string
    description: string
    image: string
    price: number
    stock: number
}

export const productData: Product[] = [
    {
        id: 1,
        name: 'Product A',
        description: 'This is a description of Product A.',
        image: '/Product1.webp',
        price: 29.99,
        stock: 100
    },
    {
        id: 2,
        name: 'Product B',
        description: 'This is a description of Product B.',
        image: '/Product2.webp',
        price: 19.99,
        stock: 80
    },
    {
        id: 3,
        name: 'Product C',
        description: 'This is a description of Product C.',
        image: '/Product3.webp',
        price: 39.99,
        stock: 60
    },
    {
        id: 4,
        name: 'Product D',
        description: 'This is a description of Product D.',
        image: '/Product4.webp',
        price: 49.99,
        stock: 40
    },
    {
        id: 5,
        name: 'Product E',
        description: 'This is a description of Product E.',
        image: '/Product5.webp',
        price: 9.99,
        stock: 200
    }
]
