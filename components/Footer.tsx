interface FooterProps {
    companyName?: string
}

export default function Footer({ companyName = 'Your Company' }: FooterProps) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='bg-gray-800'>
            <small className='text-sm text-white'>
                &copy; {currentYear} {companyName}, All rights reserved.
            </small>
        </footer>
    )
}
