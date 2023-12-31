import Link from 'next/link'
import {
    ArticleSkeleton,
    CategorySkeleton,
    categorySeedData
} from '@/app/(content)/blog/[category]/categoryData'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'
import formatDate from '@/utils/formatDate'

async function fetchData(categoryData: CategorySkeleton[]) {
    return new Promise<CategorySkeleton[]>(resolve => {
        setTimeout(() => {
            resolve(categoryData)
        }, 1000)
    })
}

export async function generateStaticParams() {
    const categoryData = await fetchData(categorySeedData)
    const categorySlugs = categoryData.map(category => category.slug)
    const params = categorySlugs.map(slug => ({ params: { category: slug } }))
    return params
}

async function fetchArticles(categorySlug: string): Promise<ArticleSkeleton[] | null> {
    const data = await fetchData(categorySeedData)
    const category = data.find(cat => cat.slug === categorySlug)
    if (!category) return null
    return category.articles
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
                    {articles?.map(({ id, date, slug, title, content, author }) => {
                        const formattedDate = formatDate({ date: date })
                        return (
                            <article
                                key={id}
                                className='flex max-w-xl flex-col items-start justify-between'
                            >
                                <div className='flex items-center gap-x-4 text-xs'>
                                    <time dateTime={formattedDate} className='text-gray-500'>
                                        {formattedDate}
                                    </time>
                                    <Link
                                        href={`/blog/${params.category}`}
                                        className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                                    >
                                        {capitalizeFirstLetter(params.category)}
                                    </Link>
                                </div>
                                <Link href={`/blog/${params.category}/${slug}`}>
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
                                                <span className='absolute inset-0' />
                                                {author}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        )
                    }) ?? <p className='text-center'>No articles found.</p>}
                </div>
            </div>
        </div>
    )
}
