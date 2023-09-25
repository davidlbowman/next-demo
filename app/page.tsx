import ThreeColumns from '@/components/ThreeColumn'
import { fetchingData, routingData } from './homepageData'

export default function Homepage() {
    return (
        <section>
            <ThreeColumns
                header='Everything You Need for Robust Routing in Your App'
                subheader='Deploy Faster with Next.js Routing'
                description={`In Next.js, template.tsx and layout.tsx files allow you to wrap pages with consistent layouts and design elements, streamlining your site's appearance. The loading.tsx file manages what's displayed during data fetching or route transitions, enhancing user experience. Meanwhile, error.tsx and not-found.tsx provide custom error pages, offering guidance for broken or missing content. These features collectively contribute to a more cohesive, user-friendly web application.`}
                featureData={routingData}
            />

            <ThreeColumns
                header='Robust Data Management in Your App'
                subheader='Fetch, Cache, and Revalidate with Next.js'
                description={`Next.js offers versatile data fetching strategies for various use cases, extending the native fetch API for customizable caching and revalidation, ensuring fresh data delivery in your application. Utilize async/await in Server Components, Route Handlers, and Server Actions for efficient data retrieval. Employ time-based or on-demand revalidation to keep your data cache updated. Handle errors smoothly and opt-out of data caching when necessary. For third-party libraries lacking fetch support, configure caching and revalidation using Route Segment Config Options and React's cache function.`}
                featureData={fetchingData}
            />
        </section>
    )
}
