import { useEffect } from 'react'
import PageLayout from '../../layouts/PageLayout'
import servicesContent from '../../content/serviceContent.json'
import ServicesCard from '../../components/services/ServicesCard'
const Services = () => {
    // when out page loads, scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const pageTitle = { path: '.', title: 'Services' }

    return (
        <>
            <PageLayout pageName='Services' pageTitle={pageTitle} />
            <main className='px-10 mt-16'>
                <div className='mb-10 text-center'>
                    <p className='header_text_small text-tertiary_color'>
                        Services
                    </p>
                    <h1 className='header_text font-bold text-quaternary_color'>
                        Contact Us Anytime{' '}
                        <span className='text-primary_color'>for Help!</span>
                    </h1>
                </div>
                <section className='w-full h-auto mt-3 flex flex-wrap justify-center gap-4'>
                    {servicesContent.serviceContent.map((elem, index) => {
                        const { id, title, image } = elem
                        return (
                            <>
                                <ServicesCard
                                    image={image}
                                    title={title}
                                    link={title}
                                    key={id}
                                    index={index}
                                />
                            </>
                        )
                    })}
                </section>
            </main>
        </>
    )
}

export default Services
