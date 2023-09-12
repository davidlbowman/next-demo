export default function delay(miliseconds: number = 1000): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, miliseconds)
    })
}
