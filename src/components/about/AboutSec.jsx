import AboutContentSec from './AboutContentSec'
import AboutImgSec from './AboutImgSec'

const AboutSec = () => {
    return (
        <>
            <section className='w-full mt-32 flex justify-center flex-wrap gap-5 lg:flex-nowrap'>
                <AboutImgSec />
                <AboutContentSec />
            </section>
        </>
    )
}

export default AboutSec
