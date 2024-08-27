import Slider from '../../controls/Slider'
import BlogCard from './BlogCard'
import blogContents from '../../content/blogContents.json'
const breakpoints = {
    1280: {
        slidesToShow: 2,
        slidesToScroll: 1,
    },
    700: {
        slidesToShow: 1,
        slidesToScroll: 1,
    },
}
const Blog = () => {
    return (
        <>
            <section className='mt-32'>
                <div className='mb-6 text-center'>
                    <p className='header_text_small text-tertiary_color'>
                        Our Latest Blog{' '}
                    </p>
                    <h1 className='header_text text-quaternary_color font-bold'>
                        Learn more from our{' '}
                        <span className='text-primary_color '>Blogs</span>
                    </h1>
                </div>
                <Slider breakpoints={breakpoints} className='ml-0 lg:ml-16'>
                    {blogContents.blogData.map((data, index) => {
                        const { author, category, id, image, title } = data
                        return (
                            <>
                                <BlogCard
                                    author={author}
                                    category={category}
                                    id={id}
                                    image={image}
                                    title={title}
                                    key={index}
                                />
                            </>
                        )
                    })}
                </Slider>
            </section>
        </>
    )
}

export default Blog
