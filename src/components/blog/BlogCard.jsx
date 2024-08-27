import { CircleUserRound, MoveRight } from 'lucide-react'
import PropTypes from 'prop-types'
const BlogCard = ({ author, category, id, image, title, key }) => {
    return (
        <>
            <div
                className='mt-12 mb-6 w-full lg:w-[400px] xl:w-[320px] shadow-customShadow border-4 border-white lg:border-none'
                key={key + id}
            >
                <a href='#' className='w-full relative'>
                    <img src={image} className='w-full  object-center' />
                    <p className='text-sm px-4 py-2 rounded-full bg-primary_color text-white absolute -bottom-4 left-5'>
                        {category}
                    </p>
                </a>
                <h1 className='text-quaternary_color px-3 py-6 text-lg font-semibold'>
                    {title}
                </h1>
                <div className='border-t-[1px] border-gray-300 w-full px-3 py-3 flex justify-between items-center'>
                    <div className='flex items-center gap-2 border-r-[1px] border-gray-300 px-1'>
                        <CircleUserRound size={18} />
                        <p className=' text-primary_color'>{author}</p>
                    </div>
                    <a
                        href='#'
                        className='w-8 h-8  bg-white text-black transition-all ease-in-out grid place-items-center
                        hover:bg-tertiary_color hover:text-white
                        '
                    >
                        <MoveRight size={19} />
                    </a>
                </div>
            </div>
        </>
    )
}
BlogCard.propTypes = {
    author: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    key: PropTypes.number,
}
export default BlogCard
