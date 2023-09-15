import Link from 'next/link'
import { ArticleSkeleton, CategoryData, categorySeedData } from './categoryData'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'

async function fetchData(categoryData: CategoryData) {
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

async function fetchArticles(category: string) {
    const res = await categorySeedData.category[category]
    return res
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const articles = await fetchArticles(params.category)

    return (
        <div className='bg-white py-24 sm:py-32'>
            <div className='mx-auto px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        {capitalizeFirstLetter(params.category)}
                    </h2>
                </div>
                <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {articles.map(article => (
                        <article
                            key={article.id}
                            className='flex max-w-xl flex-col items-start justify-between'
                        >
                            <div className='flex items-center gap-x-4 text-xs'>
                                <time
                                    dateTime={article.date.toLocaleString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                    className='text-gray-500'
                                >
                                    {article.date.toLocaleString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                                <Link
                                    href={`/blog/${params.category}`}
                                    className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                                >
                                    {capitalizeFirstLetter(params.category)}
                                </Link>
                            </div>
                            <Link href={article.slug}>
                                <div className='group relative'>
                                    <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                                        {article.title}
                                    </h3>
                                    <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                                        {article.content}
                                    </p>
                                </div>
                                <div className='relative mt-8 flex items-center gap-x-4'>
                                    <div className='text-sm leading-6'>
                                        <p className='font-semibold text-gray-900'>
                                            <span className='absolute inset-0' />
                                            {article.author}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
