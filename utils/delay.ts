interface DelayParams<T> {
    resource: T
    milliseconds?: number
}

export default function delay<T>({ resource, milliseconds = 1000 }: DelayParams<T>): Promise<T> {
    return new Promise(resolve => {
        setTimeout(() => resolve(resource), milliseconds)
    })
}
