import { motion, useAnimation } from 'framer-motion'
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react'
import PropTypes from 'prop-types'
export default function TeamItems({ elem, key }) {
    const animate = useAnimation()
    const {
        id,
        person,
        jobTitles,
        desc,
        fb_profile,
        tw_profile,
        insta_profile,
        yt_profile,
        profile_Img,
    } = elem
    return (
        <>
            <div
                className='w-full xl:w-[300px] mt-14 border-[10px] border-white xl:border-none'
                key={key + id}
            >
                <motion.div
                    className='w-full relative'
                    initial={{ backgroundColor: 'transparent' }}
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
                    whileTap={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => animate.start({ y: -0, opacity: 1 })}
                    onHoverEnd={() => animate.start({ y: -40, opacity: 0 })}
                    onTapStart={() => animate.start({ y: -0, opacity: 1 })}
                    onTapCancel={() => animate.start({ y: -40, opacity: 0 })}
                >
                    <img
                        src={profile_Img}
                        alt={profile_Img}
                        className='w-full object-center'
                    />
                    <motion.div
                        className=' absolute -bottom-16'
                        initial={{ y: -40, opacity: 0 }}
                        animate={animate}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='w-full flex items-center justify-center gap-5 absolute -top-4'>
                            <a
                                href={fb_profile}
                                className='w-8 h-8 bg-tertiary_color text-white grid place-items-center'
                                target='_blank'
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={yt_profile}
                                className='w-8 h-8 bg-tertiary_color text-white grid place-items-center'
                                target='_blank'
                            >
                                <Youtube size={20} />
                            </a>
                            <a
                                href={insta_profile}
                                className='w-8 h-8 bg-tertiary_color text-white grid place-items-center'
                                target='_blank'
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={tw_profile}
                                className='w-8 h-8 bg-tertiary_color text-white grid place-items-center'
                                target='_blank'
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                        <p className='text-center text-white bg-[#141414] w-full px-5 py-7'>
                            {desc}
                        </p>
                    </motion.div>
                </motion.div>
                <h1 className='text-xl mt-3 text-secondary_color text-center font-semibold'>
                    {person}
                    <span className='block text-sm text-color_light'>
                        {jobTitles}
                    </span>
                </h1>
            </div>
        </>
    )
}

TeamItems.propTypes = {
    elem: PropTypes.shape({
        id: PropTypes.number,
        person: PropTypes.string,
        jobTitles: PropTypes.string,
        desc: PropTypes.string,
        fb_profile: PropTypes.string,
        tw_profile: PropTypes.string,
        insta_profile: PropTypes.string,
        yt_profile: PropTypes.string,
        profile_Img: PropTypes.string,
    }).isRequired,
    key: PropTypes.number,
}
