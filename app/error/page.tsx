import throwError from '@/utils/throwError'

export default function ErrorPage() {
    return (
        <section>
            <h2 className='text-white text-2xl'>Intentional Error</h2>
            {/* {throwError('This is an intentional error for testing purposes.')} */}
        </section>
    )
}
