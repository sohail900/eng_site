import Button from '../Button'
import logo from '/assets/logo.png'
const HeroSec = () => {
    return (
        <>
            <div className='absolute top-0 left-0 bg-primary_color px-6 py-4 hidden xl:block'>
                <img src={logo} alt='logo' width={240} />
            </div>
            <div className='small_rect'></div>
            <section className='w-full h-full grid place-items-center pt-20 '>
                <div className='rectangular'></div>
                <div className='absolute top-[40%] -left-2 translate-x-8 text-white w-[80%] sm:w-[70%] lg:w-[50%] sm:top-[48%] md:left-40 xl:left-72'>
                    <h1 className='text-4xl font-bold xl:text-6xl md:text-5xl'>
                        We&#39;re{' '}
                        <span className='text-tertiary_color'>Best</span>{' '}
                        Providing Industrial Park
                    </h1>
                    <p className='text-xl mt-10 w-[90%] xl:w-[80%]'>
                        Industry is ready to help you in making unique-looking
                        and best website in a moment.
                    </p>
                    <button className='button mt-2 block lg:hidden'>
                        More About Us
                    </button>
                </div>
                <Button
                    style={{
                        bg_color: '#fff',
                        text_color: '#000',
                        hidden: true,
                        position:
                            'absolute bottom-36 -right-72 lg:block xl:-right-96',
                    }}
                >
                    More About Us
                </Button>
            </section>
        </>
    )
}

export default HeroSec
