import delay from '@/utils/delay'

export default async function LoadingPage() {
    const resource = await delay(1000)

    return <p className='text-white'>LOADED</p>
}
