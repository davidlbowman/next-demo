import { Article, CategoryData, categorySeedData } from './categoryData'

const fetchData = async (categoryData: CategoryData) => {
    return new Promise<CategoryData>(resolve => {
        setTimeout(() => {
            resolve(categoryData)
        }, 1000)
    })
}

export async function generateStaticParams() {
    const categoryData = await fetchData(categorySeedData)
    const categoryKeys = Object.keys(categoryData.category)

    const params = categoryKeys.map(key => {
        return {
            params: {
                category: key
            }
        }
    })

    return params
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    return <h1 className='text-white'>{params.category}</h1>
}
