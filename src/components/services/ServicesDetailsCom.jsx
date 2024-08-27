import Proptypes from 'prop-types'
import servicesData from '../../content/serviceContent.json'
import { Link } from 'react-router-dom'
const ServicesDetailsCom = ({ slug }) => {
    ///filtered method to filter specific data from "Services Data"
    const data = servicesData.serviceContent.filter(
        (elem) => elem.title === slug
    )
    return (
        <>
            <section className='w-full flex justify-center flex-wrap gap-6 mt-10 px-10 lg:flex-nowrap'>
                <div className='w-full lg:w-[30%] h-max bg-[#EFEFEF] px-5 py-5 mx-auto rounded-lg'>
                    <h1 className='text-2xl mb-5 text-quaternary_color font-bold'>
                        All Services
                    </h1>
                    <ul className='flex flex-wrap items-center gap-4 lg:flex-none lg:gap-0'>
                        {servicesData.serviceContent.map((elem, index) => {
                            return (
                                <>
                                    {slug !== elem.title && (
                                        <Link
                                            to={`../services/details/${elem.title}`}
                                            key={index}
                                            className='block w-auto lg:w-full border-2 border-[rgba(0,0,0,0.2)] text-center text-lg mb-4 px-3 py-3 rounded-md font-semibold text-color_light'
                                        >
                                            {elem.title}
                                        </Link>
                                    )}
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div className='w-full lg:w-[60%]'>
                    <img
                        src={data[0].image}
                        alt={data[0].image}
                        className='w-full mb-5 rounded-md'
                    />
                    <h1 className='text-2xl lg:text-3xl font-bold text-quaternary_color mb-8'>
                        {data[0].title}
                    </h1>
                    <p className='text-lg  text-color_light'>{data[0].desc}</p>
                </div>
            </section>
        </>
    )
}

ServicesDetailsCom.propTypes = {
    slug: Proptypes.string.isRequired,
}

export default ServicesDetailsCom
