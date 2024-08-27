import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import bgImg1 from '/assets/bg/bg-img1.jpg'
import bgImg2 from '/assets/bg/bg-img2.jpg'
import HeroSec from './HeroSec'
import SideImages from './SideImages'

const Hero = () => {
    const [bgImage, setBgImage] = useState(bgImg1)
    const [imageKey, setImageKey] = useState(0) // Key to trigger re-render of image
    const controls = useAnimation() //use animation hook

    useEffect(() => {
        const interval = setInterval(() => {
            setBgImage((prevImage) => (prevImage === bgImg1 ? bgImg2 : bgImg1))
            setImageKey((prevKey) => prevKey + 1) // Update key to trigger fade-in
        }, 5000) // Change Image Every 5 Seconds

        return () => clearInterval(interval) // Cleanup interval on component unmount
    }, [])
    console.log(imageKey)
    // Trigger fade-in animation when the background image changes
    useEffect(() => {
        controls.start({
            opacity: 1,
            transition: { duration: 1 },
        })
    }, [imageKey, controls])

    return (
        <section className='w-full h-auto relative' id='hero'>
            <div className='w-full h-full absolute top-0 -z-10 overflow-hidden'>
                <motion.img
                    key={imageKey} // Use key to force re-render of image
                    src={bgImage}
                    alt='bg_img'
                    className='animate_scale w-full h-full object-cover -z-40 absolute top-0'
                    initial={{ opacity: 0 }} // Initial state
                    animate={controls} // Animation controls
                />
                <div className='w-full h-full absolute top-0 bg-[rgba(0,0,0,0.5)] -z-30'></div>
            </div>
            <div className='w-full h-full z-10'>
                <HeroSec />
                <SideImages />
            </div>
        </section>
    )
}

export default Hero
