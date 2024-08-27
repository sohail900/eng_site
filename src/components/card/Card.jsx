import CardItem from './CardItem'
import Slider from '../../controls/Slider'
import cardItems from '../../content/cardContents.json'
const breakpoints = {
    900: {
        slidesToShow: 2,
        slidesToScroll: 1,
    },
    600: {
        slidesToShow: 1,
        slidesToScroll: 1,
    },
}
const Card = () => {
    return (
        <div className='w-full mt-36 ml-0 xl:ml-10'>
            <Slider breakpoints={breakpoints}>
                {cardItems.cardItem.map((elem, key) => {
                    const { label, title, desc, id, url } = elem
                    return (
                        <>
                            <div
                                className='w-[100%] h-auto px-8 py-9 gap-5 card xl:w-[360px] lg:px-9  '
                                key={key}
                            >
                                <CardItem
                                    label={label}
                                    title={title}
                                    desc={desc}
                                    id={id}
                                    url={url}
                                />
                            </div>
                        </>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Card
