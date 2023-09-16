import {
    BookOpenIcon,
    ClockIcon,
    ExclamationTriangleIcon,
    FolderIcon,
    ShieldExclamationIcon
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

export const featureData: Features[] = [
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
            'Next.js supports dynamic routes through folder names enclosed in square brackets, like [slug]. You can statically generate these routes at build time using the generateStaticParams function. Catch-all and optional segments further extend the routing capabilities, allowing for flexible and optimized routing solutions.',
        href: '/blog',
        icon: FolderIcon
    }
]
