interface DelayParams<T> {
    resource: T
    miliseconds?: number
}

export default function delay<T>({ resource, miliseconds = 1000 }: DelayParams<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(resource)
            }, miliseconds)
        } catch (error) {
            reject(error)
        }
    })
}
