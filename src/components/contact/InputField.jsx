const InputField = () => {
    return (
        <>
            <form
                method='post'
                className='w-full  my-6 flex flex-col justify-center items-center gap-4'
            >
                <div className='flex justify-center items-center gap-4 w-full'>
                    <input
                        type='text'
                        name='text'
                        placeholder='Name'
                        className='w-full px-3 py-4 bg-[#EEEEEE] rounded-md'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='w-full px-3 py-4 bg-[#EEEEEE]  rounded-md'
                    />
                </div>
                <div className='flex justify-center items-center gap-4 w-full'>
                    <input
                        type='number'
                        name='phone'
                        placeholder='Your Phone'
                        className='w-full px-3 py-4 bg-[#EEEEEE]  rounded-md '
                    />
                    <input
                        type='text'
                        name='text'
                        placeholder='Subject'
                        className='w-full px-3 py-4 bg-[#EEEEEE]  rounded-md'
                    />
                </div>
                <textarea
                    className='w-full px-3 py-4 bg-[#EEEEEE] rounded-md h-[200px]'
                    name='message'
                    placeholder='Message'
                ></textarea>
                <button className='px-4 py-3 rounded-full bg-primary_color   text-white transition-all hover:bg-tertiary_color'>
                    Send Message
                </button>
            </form>
        </>
    )
}

export default InputField
