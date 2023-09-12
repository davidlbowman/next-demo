export default function throwError(
    message: string = 'This is an intentional error for testing purposes.'
): never {
    throw new Error(message)
}
