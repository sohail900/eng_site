import { useEffect } from 'react'
import Hero from '../../components/hero/Hero'
import Arrow from '../../components/Arrow'
import Card from '../../components/card/Card'
import AboutSec from '../../components/about/AboutSec'
import ServicesCom from '../../components/services/ServicesCom'
import ReviewCom from '../../components/review/ReviewCom'
import PortfolioCom from '../../components/portfolio/PortfolioCom'
import Team from '../../components/team/Team'
import FaqCom from '../../components/faq/FaqCom'
import Blog from '../../components/blog/Blog'
import ContactCom from '../../components/contact/ContactCom'

const Home = () => {
    // when out page loads, scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Hero />
            <Arrow />
            <div className='px-10'>
                <Card />
                <AboutSec />
                <ServicesCom />
                <ReviewCom />
            </div>
            <PortfolioCom />
            <div className='px-10'>
                <Team />
                <FaqCom />
                <Blog />
            </div>
            <ContactCom />
        </>
    )
}

export default Home
