import {
    ArrowPathIcon,
    ArrowsPointingInIcon,
    ArrowsPointingOutIcon,
    BookOpenIcon,
    ClockIcon,
    ExclamationTriangleIcon,
    FolderIcon,
    ShieldExclamationIcon,
    ShoppingBagIcon
} from '@heroicons/react/20/solid'

export interface Features {
    name: string
    description: string
    href: string
    icon: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined
            titleId?: string | undefined
        } & React.RefAttributes<SVGSVGElement>
    >
}

export const routingData: Features[] = [
    {
        name: 'Layouts and Templates',
        description:
            'Both layout.tsx and template.tsx in Next.js provide a way to wrap pages in a common structure. You can include components such as headers and footers, which will be rendered consistently across multiple pages.',
        href: '/layout',
        icon: BookOpenIcon
    },
    {
        name: 'Loading State',
        description:
            'The loading.tsx file handles the display during the loading of a page. This can be particularly useful for providing a smooth user experience while asynchronously fetching data or waiting for route transitions.',
        href: '/loading',
        icon: ClockIcon
    },
    {
        name: 'Route Error Handling',
        description:
            'The error.tsx file in Next.js enables you to present a user-friendly interface with clear messages and potential redirections to other parts of your application, thereby transforming error experiences into informative and navigable moments.',
        href: '/error',
        icon: ExclamationTriangleIcon
    },
    {
        name: 'Handling 404 Errors',
        description:
            'The not-found.tsx file in Next.js is a custom 404 error page that enhances user experience. Instead of a generic error, you can offer a tailored layout and guide users back to active pages, improving navigation and retention.',
        href: '/not-found',
        icon: ShieldExclamationIcon
    },
    {
        name: 'Dynamic Routing',
        description:
            'Next.js supports dynamic routes through folder names enclosed in square brackets, like [slug]. You can statically generate these routes at build time using the generateStaticParams function.',
        href: '/blog',
        icon: FolderIcon
    },
    {
        name: 'Route Handling',
        description:
            'Route Handlers in Next.js allow you to define custom server-side logic for handling web requests, similar to how API routes work but specifically within the `app` directory.',
        href: '/form',
        icon: ArrowPathIcon
    }
]

export const fetchingData: Features[] = [
    {
        name: 'Server-Side Fetching',
        description:
            'Utilize fetch with async/await in Server Components, Route Handlers, and Server Actions for efficient data retrieval directly on the server.',
        href: '/server-side-fetching',
        icon: ArrowsPointingInIcon
    },
    {
        name: 'Client-Side Fetching',
        description:
            'Fetch data directly on the client using Route Handlers or employ third-party libraries like SWR or React Query for enhanced data fetching and state management on the client-side.',
        href: '/client-side-fetching',
        icon: ArrowsPointingOutIcon
    },
    {
        name: 'Caching and Revalidation',
        description:
            "Leverage Next.js's automatic caching and flexible revalidation strategies to ensure your application always serves the latest data without redundant fetches.",
        href: '/caching-and-revalidation',
        icon: ArrowPathIcon
    }
]
