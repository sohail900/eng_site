import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import servicesItem from '../../content/serviceContent.json'

const ServicesItems = ({ id }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const filteredData = servicesItem.serviceContent.filter(
            (elem) => elem.id === id
        )
        setData(filteredData)
    }, [id])

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section className='gap-6'>
            {data?.map((elem) => {
                const { id, title, desc, image } = elem
                return (
                    <motion.div
                        key={id}
                        className='flex justify-center gap-10 flex-wrap lg:flex-nowrap'
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={fadeUpVariant}
                    >
                        <img
                            src={image}
                            alt={title}
                            className='w-full h-2/4 lg:w-[550px] lg:h-auto'
                        />
                        <div className='w-full lg:w-[50%]'>
                            <h1 className='text-quaternary_color mb-6 text-3xl font-bold leading-snug'>
                                {title}
                            </h1>
                            <p className='text-color_light text-[1.1rem] leading-8  sm:leading-7'>
                                {desc}
                            </p>
                        </div>
                    </motion.div>
                )
            })}
        </section>
    )
}

ServicesItems.propTypes = {
    id: PropTypes.number.isRequired,
}

export default ServicesItems
