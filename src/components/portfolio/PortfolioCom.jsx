import Slider from '../../controls/Slider'
import portfolioContent from '../../content/portfolioContent.json'
import PortfolioItems from './PortfolioItems'
import './style.css'
const breakpoints = {
    1200: {
        slidesToShow: 3,
        slidesToScroll: 1,
    },
    950: {
        slidesToShow: 2,
        slidesToScroll: 1,
    },
    570: {
        slidesToShow: 1,
        slidesToScroll: 1,
    },
}
const PortfolioCom = () => {
    return (
        <>
            <section className='mt-20 mb-10 '>
                <Slider
                    slidesToShow={4}
                    initialSlide={1}
                    breakpoints={breakpoints}
                >
                    {portfolioContent.portfolioData.map((elem, key) => {
                        const { desc, id, image, title } = elem
                        return (
                            <>
                                <PortfolioItems
                                    id={id}
                                    image={image}
                                    desc={desc}
                                    title={title}
                                    key={key}
                                />
                            </>
                        )
                    })}
                </Slider>
            </section>
        </>
    )
}

export default PortfolioCom
