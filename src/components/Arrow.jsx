import { useState, useEffect } from 'react'
import { MoveUp } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

const Arrow = () => {
    const controls = useAnimation()
    const [showArrow, setShowArrow] = useState(false)
    //use effect to hide/show arrow.
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowArrow(true)
            } else {
                setShowArrow(false)
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    return (
        <>
            {showArrow && (
                <motion.a
                    href='#hero'
                    className='bg-primary_color w-10 h-10 grid place-items-center fixed bottom-20 right-0 text-white overflow-hidden z-50'
                    onHoverStart={() =>
                        controls
                            .start({ y: -30, opacity: 0 })
                            .then(() => controls.start({ y: 30, opacity: 0 }))
                            .then(() => controls.start({ y: 0, opacity: 1 }))
                    }
                >
                    <motion.div
                        initial={{ y: 0, opacity: 1 }}
                        animate={controls}
                        transition={{
                            type: 'spring',
                            stiffness: 600,
                            damping: 50,
                        }}
                    >
                        <MoveUp size={24} />
                    </motion.div>
                </motion.a>
            )}
        </>
    )
}

export default Arrow
