import bgLeft from '/assets/bg/bg-left.png'
import bgRight from '/assets/bg/bg-right.png'
const SideImages = () => {
    return (
        <>
            <img
                src={bgLeft}
                alt='bgLeft'
                width={700}
                className='absolute -bottom-50 left-0 -z-10'
            />
            <img
                src={bgRight}
                alt='bgRight'
                width={700}
                className='absolute -bottom-50 right-0 -z-10'
            />
        </>
    )
}

export default SideImages
