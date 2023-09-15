import {
    ArticleSkeleton,
    CategorySkeleton,
    categorySeedData
} from '@/app/(content)/blog/[category]/categoryData'

async function fetchData(categoryData: CategorySkeleton[]) {
    return new Promise<CategorySkeleton[]>(resolve => {
        setTimeout(() => {
            resolve(categoryData)
        }, 1000)
    })
}

export async function generateStaticParams() {
    const categoryData = await fetchData(categorySeedData)
    const params = categoryData.flatMap(category =>
        category.articles.map(article => ({
            params: {
                category: category.slug,
                article: article.slug
            }
        }))
    )
    return params
}

async function fetchArticle(
    categorySlug: string,
    articleSlug: string
): Promise<ArticleSkeleton | null> {
    const data = await fetchData(categorySeedData)
    const category = data.find(cat => cat.slug === categorySlug)

    if (!category) return null
    const article = category.articles.find(article => article.slug === articleSlug) || null

    return article
}

export default async function ArticlePage({
    params
}: {
    params: { category: string; article: string }
}) {
    const article = await fetchArticle(params.category, params.article)
    if (!article) return null
    const { author, content, title } = article

    return (
        <section className='bg-white px-6 py-32 lg:px-8'>
            <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
                <p className='text-base font-semibold leading-7 text-indigo-600'>{author}</p>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    {title}
                </h1>
                <p className='mt-6 text-xl leading-8'>{content}</p>
            </div>
        </section>
    )
}
