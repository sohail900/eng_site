import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../layouts/PageLayout'
import ServicesDetailsCom from '../../components/services/ServicesDetailsCom'

const ServicesDetails = () => {
    const { slug } = useParams()
    // when out page loads, scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const pageTitle = [
        { path: '../services', title: 'Services' },
        { path: '.', title: slug },
    ]
    return (
        <>
            <PageLayout pageName={slug} pageTitle={pageTitle} />
            <ServicesDetailsCom slug={slug} />
        </>
    )
}

export default ServicesDetails
