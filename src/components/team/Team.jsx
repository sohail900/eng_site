import Slider from '../../controls/Slider'
import TeamItems from './TeamItems'
import teamContents from '../../content/teamContents.json'
const breakpoints = {
    1120: {
        slidesToShow: 3,
        slidesToScroll: 1,
    },
    880: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    },
    650: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    },
}
const Team = () => {
    return (
        <>
            <section className='mt-36 mb-16'>
                <div className='mb-6 ml-0 xl:ml-4 text-center'>
                    <p className='header_text_small text-tertiary_color'>
                        Team Member
                    </p>
                    <h1 className='header_text text-quaternary_color font-bold'>
                        Our Awesome{' '}
                        <span className='text-primary_color '>Team</span>
                    </h1>
                </div>
                <Slider
                    slidesToShow={4}
                    initialSlide={1}
                    breakpoints={breakpoints}
                    className='px-4'
                >
                    {teamContents.teamData.map((elem, key) => {
                        return <TeamItems elem={elem} key={key} />
                    })}
                </Slider>
            </section>
        </>
    )
}

export default Team
