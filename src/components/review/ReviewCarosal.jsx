import { Star } from 'lucide-react'
import Slider from '../../controls/Slider'
import clientContetn from '../../content/clientContent.json'

const breakpoints = {
    1000: {
        slidesToShow: 2,
        slidesToScroll: 1,
    },
    700: {
        slidesToShow: 1,
        slidesToScroll: 1,
    },
}

const ReviewCarosal = () => {
    return (
        <>
            <Slider breakpoints={breakpoints} className='ml-0 sm:ml-12'>
                {clientContetn.clientContent.map((elem, key) => {
                    const { clientName, jobTitles, desc, image } = elem
                    return (
                        <>
                            <div key={key} className='review_card'>
                                <img
                                    src={image}
                                    alt={image}
                                    className='absolute -top-10 left-1/2 -translate-x-1/2 border-2 border-white'
                                />
                                <h1 className='mt-10 font-semibold text-lg'>
                                    {clientName}{' '}
                                    <span className='text-sm text-tertiary_color'>
                                        /{jobTitles}
                                    </span>
                                </h1>
                                <div className='flex justify-center gap-2'>
                                    <Star
                                        fill='#F6B91C'
                                        strokeWidth={0}
                                        size={23}
                                    />
                                    <Star
                                        fill='#F6B91C'
                                        strokeWidth={0}
                                        size={23}
                                    />
                                    <Star
                                        fill='#F6B91C'
                                        strokeWidth={0}
                                        size={23}
                                    />
                                    <Star
                                        fill='#F6B91C'
                                        strokeWidth={0}
                                        size={23}
                                    />
                                    <Star
                                        fill='#F6B91C'
                                        strokeWidth={0}
                                        size={23}
                                    />
                                </div>
                                <p className='text-color_light text-center'>
                                    {desc}
                                </p>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default ReviewCarosal
