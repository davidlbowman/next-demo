interface formatDateParams {
    date: Date
    locales?: string
    options?: Intl.DateTimeFormatOptions
}

export default function formatDate({
    date,
    locales = 'en-US',
    options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
}: formatDateParams): string {
    return date.toLocaleString(locales, options)
}
