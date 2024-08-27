import { useState } from 'react'
import { Fuel, Dam, Factory, HousePlug, Droplet } from 'lucide-react'
import './style.css'
import ServicesItems from './ServicesItems'
const servicesHeader = [
    {
        id: 1,
        title: 'Fuel & Gas',
        icon: <Fuel size={60} strokeWidth={1.2} />,
    },
    {
        id: 2,
        title: 'Power & Energy',
        icon: <Dam size={60} strokeWidth={1.2} />,
    },
    {
        id: 3,
        title: 'Mechanical Engineering',
        icon: <Factory size={60} strokeWidth={1.2} />,
    },
    {
        id: 4,
        title: 'Solar Energy',
        icon: <HousePlug size={60} strokeWidth={1.2} />,
    },
    {
        id: 5,
        title: 'Oil And Lubricant',
        icon: <Droplet size={60} strokeWidth={1.2} />,
    },
]
const ServicesCom = () => {
    const [servicesId, setServicesId] = useState(1)
    return (
        <>
            <section className='mt-32'>
                <div className='mb-10 text-center'>
                    <p className='header_text_small text-tertiary_color'>
                        Services
                    </p>
                    <h1 className='header_text font-bold text-quaternary_color'>
                        Contact Us Anytime{' '}
                        <span className='text-primary_color'>for Help!</span>
                    </h1>
                </div>
                <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-3 gap-6 mb-8 menu:grid-cols-5fr'>
                    {servicesHeader.map((elem, key) => {
                        const { icon, id, title } = elem
                        return (
                            <div
                                className='services_container'
                                key={key}
                                onClick={() => {
                                    setServicesId(id)
                                }}
                            >
                                <p className='absolute top-3 right-6 font-bold text-lg'>
                                    0{id}
                                </p>
                                <p className='text-center text-primary_color  transition-all'>
                                    {icon}
                                </p>
                                <h1 className='text-[1rem] font-bold sm:text-[1rem] '>
                                    {title}
                                </h1>
                            </div>
                        )
                    })}
                </div>
                <ServicesItems id={servicesId} />
            </section>
        </>
    )
}

export default ServicesCom
