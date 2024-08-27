import FooterLink from './FooterLink'
import FooterSubSec from './FooterSubSec'
import './style.css'
const Footer = () => {
    //px-6 py-7
    return (
        <>
            <section className='mt-36 w-full h-auto relative bg-secondary_color z-10 overflow-hidden'>
                <FooterSubSec />
                <FooterLink />
            </section>
        </>
    )
}

export default Footer
