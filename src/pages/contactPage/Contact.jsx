import { useEffect } from 'react'
import PageLayout from '../../layouts/PageLayout'
import ContactCom from '../../components/contact/ContactCom'
import InputField from '../../components/contact/InputField'
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const pageTitle = { path: '.', title: 'Contact Us' }
    return (
        <>
            <PageLayout pageName='Contact Us' pageTitle={pageTitle} />
            <div className='w-full px-10'>
                <ContactCom />
                <div>
                    <p className='mt-4 mb-4 text-center text-tertiary_color'>
                        OR
                    </p>
                </div>
                <div className='w-full xl:w-[84%] mx-auto'>
                    <InputField />
                </div>
            </div>
        </>
    )
}

export default Contact
