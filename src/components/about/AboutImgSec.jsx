import Button from '../Button'
import about_img from '/assets/about_img.jpg'
const AboutImgSec = () => {
    return (
        <>
            <div className='w-full lg:w-1/2 grid place-items-center '>
                <div
                    className='relative w-3/4 lg:w-[350px] xl:w-[400px]'
                    style={{ aspectRatio: 'auto 400 / 300' }}
                >
                    <div className='shape_small'></div>
                    <img
                        src={about_img}
                        alt='about_img'
                        //     width={400}
                        className='w-full h-auto  rounded-tl-[10rem]'
                    />
                    <Button
                        style={{
                            bg_color: '#000',
                            text_color: '#fff',
                            position:
                                'absolute bottom-[30%] -right-[50%] sm:-right-[70%] xl:-right-[80%]',
                        }}
                    >
                        More About Us
                    </Button>
                    <div className='shape'></div>
                </div>
            </div>
        </>
    )
}

export default AboutImgSec
