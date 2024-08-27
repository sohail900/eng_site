import { useState } from 'react'
import faqContent from '../../content/faqContent.json'
import FaqItems from './FaqItems'

const FaqCom = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <section className='mt-32 flex flex-col items-center justify-center'>
            {faqContent.faqData.map((faq, index) => (
                <FaqItems
                    faq={faq}
                    index={index}
                    key={index}
                    openIndex={openIndex}
                    toggleFaq={toggleFaq}
                />
            ))}
        </section>
    )
}

export default FaqCom
