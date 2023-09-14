import ThreeColumns from '@/components/ThreeColumn'
import { featureData } from './homepageData'

export default function Homepage() {
    return (
        <section>
            <ThreeColumns
                header='Everything You Need for Robust Routing in Your App'
                subheader='Deploy Faster with Next.js Routing'
                description={`In Next.js, template.tsx and layout.tsx files allow you to wrap pages with consistent layouts and design elements, streamlining your site's appearance. The loading.tsx file manages what's displayed during data fetching or route transitions, enhancing user experience. Meanwhile, error.tsx and not-found.tsx provide custom error pages, offering guidance for broken or missing content. These features collectively contribute to a more cohesive, user-friendly web application.`}
                featureData={featureData}
            />
        </section>
    )
}
