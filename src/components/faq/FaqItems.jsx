import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ProtoType from 'prop-types'
const FaqItems = ({ faq, index, openIndex, toggleFaq }) => {
    return (
        <>
            <div
                key={faq.id}
                className='border-b border-gray-200 w-full bg-[#F8F8F8] sm:w-[90%] md:w-[70%]'
            >
                <div
                    className={`flex justify-between py-6 px-6 items-center cursor-pointer w-full ${
                        openIndex === index
                            ? 'bg-primary_color text-white'
                            : 'bg-transparent text-black'
                    }`}
                    onClick={() => toggleFaq(index)}
                >
                    <h1 className='text-lg font-medium'>{faq.ques}</h1>
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </div>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: openIndex === index ? 1 : 0,
                        height: openIndex === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className='overflow-hidden px-4'
                >
                    <p className='mt-2 text-color_light'>{faq.answ}</p>
                </motion.div>
            </div>
        </>
    )
}
FaqItems.propTypes = {
    faq: ProtoType.shape({
        id: ProtoType.number,
        ques: ProtoType.string,
        answ: ProtoType.string,
    }).isRequired,
    index: ProtoType.number.isRequired,
    openIndex: ProtoType.number,
    toggleFaq: ProtoType.func.isRequired,
}
export default FaqItems
