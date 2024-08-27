import ContactItems from './ContactItems'
import './style.css'
const ContactCom = () => {
    return (
        <>
            <section className='mt-32 mb-10'>
                <div className='mb-6 text-center'>
                    <p className='header_text_small text-tertiary_color'>
                        Get in Touch{' '}
                    </p>
                    <h1 className='header_text text-quaternary_color font-bold'>
                        Contact Us Anytime{' '}
                        <span className='text-primary_color '>for Help!</span>
                    </h1>
                </div>
                <div className='mt-10 flex justify-center items-center gap-6 flex-wrap'>
                    <ContactItems />
                </div>
            </section>
        </>
    )
}

export default ContactCom
