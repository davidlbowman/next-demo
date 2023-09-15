export type ArticleSkeleton = {
    id: number
    title: string
    slug: string
    author: string
    date: Date
    content: string
}

export interface CategoryData {
    id: number
    category: {
        [key: string]: ArticleSkeleton[]
    }
}

export const categorySeedData: CategoryData = {
    id: 1,
    category: {
        resources: [
            {
                id: 1,
                title: 'The Future of Web Design',
                slug: 'the-future-of-web-design',
                author: 'Jane Doe',
                date: new Date('2022-01-15'),
                content:
                    'Web design is evolving rapidly with the advent of new technologies and design paradigms. The focus is shifting towards user experience, accessibility, and mobile-first design.'
            },
            {
                id: 2,
                title: 'Introduction to CSS Grid',
                slug: 'introduction-to-css-grid',
                author: 'John Smith',
                date: new Date('2022-02-20'),
                content:
                    'CSS Grid has revolutionized the way we think about layout on the web. It provides a flexible and efficient way to create complex layouts with ease.'
            },
            {
                id: 3,
                title: 'Why JavaScript Matters',
                slug: 'why-javascript-matters',
                author: 'Emily Johnson',
                date: new Date('2022-03-10'),
                content:
                    'JavaScript has become an essential part of modern web development. Its versatility allows for rich, interactive user experiences across a wide range of platforms.'
            }
        ],
        press: [
            {
                id: 4,
                title: 'Company Announces New Framework',
                slug: 'company-announces-new-framework',
                author: 'Mark Williams',
                date: new Date('2022-04-01'),
                content:
                    'Our company is excited to announce a new JavaScript framework designed to simplify the development of enterprise-level applications.'
            },
            {
                id: 5,
                title: 'Security in Web Development',
                slug: 'security-in-web-development',
                author: 'Sarah Brown',
                date: new Date('2022-05-15'),
                content:
                    'Security should never be an afterthought in web development. This article explores best practices for keeping your applications secure.'
            },
            {
                id: 6,
                title: 'The Importance of SEO',
                slug: 'the-importance-of-seo',
                author: 'William Davis',
                date: new Date('2022-06-30'),
                content:
                    "Search Engine Optimization (SEO) is more important than ever in today's competitive market. Learn how to optimize your website for better visibility."
            }
        ]
    }
}
