const loadingImg1 =
    'https://demo.casethemes.net/industo/wp-content/themes/industo/template-parts/svgs/big.png'
const loadingImg2 =
    'https://demo.casethemes.net/industo/wp-content/themes/industo/template-parts/svgs/small.png'
const Loading = () => {
    return (
        <>
            <section className='w-full h-dvh flex justify-center items-center relative'>
                <img
                    src={loadingImg1}
                    alt='Loading1'
                    width={70}
                    className='animate_clockwise mr-4'
                />
                <img
                    src={loadingImg2}
                    alt='Loading2'
                    width={45}
                    className='animate_anticlockwise absolute top-[45%] right-[45%]  translate-y-[-50%]'
                />
            </section>
        </>
    )
}

export default Loading
