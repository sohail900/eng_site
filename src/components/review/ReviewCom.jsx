import ReviewCarosal from './ReviewCarosal'
import './style.css'

const ReviewCom = () => {
    return (
        <>
            <section className='mt-36 mb-16'>
                <div className='mb-6 ml-0 xl:ml-4 text-center'>
                    <p className='header_text_small text-tertiary_color'>
                        Testimonial
                    </p>
                    <h1 className='header_text text-quaternary_color font-bold'>
                        Our Clent’s{' '}
                        <span className='text-primary_color '>Reviews</span>
                    </h1>
                </div>
                <ReviewCarosal />
            </section>
        </>
    )
}

export default ReviewCom
