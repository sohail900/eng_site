import PageLayout from '../../layouts/PageLayout'
import { useEffect } from 'react'
import { Factory, Globe, Projector } from 'lucide-react'
import ReviewCom from '../../components/review/ReviewCom'
import AboutCard from '../../components/about/AboutCard'
import aboutImg2 from '/assets/about_img2.jpg'
const About = () => {
    // when out page loads, scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const pageTitle = { path: '.', title: 'About Us' }
    return (
        <>
            <PageLayout pageName='About Us' pageTitle={pageTitle} />
            <section className='px-10 mt-14'>
                <div className='mb-6 text-center'>
                    <p className='header_text_small text-tertiary_color'>
                        Achievements{' '}
                    </p>
                    <h1 className='header_text text-quaternary_color font-bold'>
                        <span className='text-primary_color '>Our</span>{' '}
                        Achievements
                    </h1>
                </div>
                <div className='w-full flex items-center justify-center gap-6 flex-wrap mt-9'>
                    <AboutCard
                        Icon={Factory}
                        title='Chain of Factories'
                        ends={500}
                    />
                    <AboutCard
                        Icon={Projector}
                        title='Engineering Project'
                        ends={1500}
                    />
                    <AboutCard
                        Icon={Globe}
                        title='Worldwide Partner'
                        ends={1500}
                    />
                </div>
                <div className='w-full mt-32 flex justify-center flex-wrap gap-5 lg:flex-nowrap'>
                    <div className='w-full lg:w-1/2 grid place-items-center '>
                        <img
                            src={aboutImg2}
                            alt={aboutImg2}
                            className='w-[80%] h-auto rounded-full'
                        />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <p className='header_text_small text-tertiary_color mb-4'>
                            Welcome to Industry Company
                        </p>
                        <h1 className='header_text text-4xl font-bold mb-6 text-quaternary_color leading-snug'>
                            We Are Expert In All Industry{' '}
                            <span className='text-primary_color'>Works</span>{' '}
                            business sectors.
                        </h1>
                        <p className='text-color_light text-lg mb-10 '>
                            As a global player, we can benefit from our overall
                            technical experience and resources and take on large
                            and complex assignments, wherever in the world the
                            needs arise.
                        </p>
                        <div className='px-12 py-5 bg-white border-l-4 border-primary_color text-color_light'>
                            <h2 className='mb-3 text-xl font-semibold'>
                                Best Quality
                            </h2>
                            <p>
                                We have completed and achieved the Certificate
                                of Quality Management System.
                            </p>
                        </div>
                    </div>
                </div>
                <ReviewCom />
            </section>
        </>
    )
}

export default About
