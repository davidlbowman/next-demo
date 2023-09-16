import Link from 'next/link'
import { CategorySkeleton, categorySeedData } from '@/app/(content)/blog/[category]/categoryData'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'
import formatDate from '@/utils/formatDate'

async function fetchData(categoryData: CategorySkeleton[]) {
    return new Promise<CategorySkeleton[]>(resolve => {
        setTimeout(() => {
            resolve(categoryData)
        }, 1000)
    })
}

async function fetchArticles() {
    const articles = await fetchData(categorySeedData)
    return articles
}

export default async function BlogPage() {
    const articles = await fetchArticles()
    return (
        <div className='bg-white py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        From the blog
                    </h2>
                    <p className='mt-2 text-lg leading-8 text-gray-600'>
                        Learn how to use Next.js quickly by reading the documentation! Try clicking
                        on a category or article page.
                    </p>
                    <div className='mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16'>
                        {articles
                            .flatMap(category =>
                                category.articles.map(article => ({
                                    ...article,
                                    category: category.slug
                                }))
                            )
                            .sort((a, b) => {
                                return new Date(b.date).getTime() - new Date(a.date).getTime()
                            })
                            .map(({ id, date, slug, title, content, author, category }) => {
                                const formattedDate = formatDate({ date: date })
                                return (
                                    <article
                                        className='flex max-w-xl flex-col items-start justify-between'
                                        key={id}
                                    >
                                        <Link href={`/blog/${category}`}>
                                            <div className='flex items-center gap-x-4 text-xs'>
                                                <time
                                                    dateTime={formattedDate}
                                                    className='text-gray-500'
                                                >
                                                    {formattedDate}
                                                </time>
                                                <h2 className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>
                                                    {capitalizeFirstLetter(category)}
                                                </h2>
                                            </div>
                                        </Link>
                                        <Link href={`/blog/${category}/${slug}`}>
                                            <div className='group relative'>
                                                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                                                    {title}
                                                </h3>
                                                <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                                                    {content}
                                                </p>
                                            </div>
                                            <div className='relative mt-8 flex items-center gap-x-4'>
                                                <div className='text-sm leading-6'>
                                                    <p className='font-semibold text-gray-900'>
                                                        {author}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}
