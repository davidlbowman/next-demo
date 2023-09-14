import { BookOpenIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'

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
            'Layouts and templates in Next.js provide a way to wrap pages in a common structure. You can include components such as headers and footers, which will be rendered consistently across multiple pages.',
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
        name: 'Error and Not-Found Handling',
        description:
            'The error.tsx and not-found.tsx files allow you to display custom pages for different types of errors and for routes that do not exist. This is useful for providing guidance when users encounter broken or missing content.',
        href: '#',
        icon: ExclamationTriangleIcon
    }
]
