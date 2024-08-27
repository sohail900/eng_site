import { Link } from 'react-router-dom'
import productContent from '../../content/productsContents.json'
const ProductsCom = () => {
    return (
        <>
            <h1 className='text-xl text-quaternary_color font-semibold mb-6'>
                Showing all {productContent.productsData.length} results
            </h1>
            <div className='flex justify-center gap-6 flex-wrap'>
                {productContent.productsData.map((elem) => {
                    const { id, image, price, title } = elem
                    return (
                        <>
                            <div
                                className='w-[200px] flex flex-col justify-center items-center h-auto py-2 px-4 rounded-lg shadow-customShadow md:w-[250px]'
                                key={id}
                            >
                                <img
                                    src={image}
                                    alt={image}
                                    className='w-full '
                                />
                                <Link
                                    to={`/products/${id}`}
                                    className='text-xl text-quaternary_color font-semibold hover:underline text-center'
                                >
                                    {title}
                                </Link>
                                <p className='text-primary_color font-semibold text-lg'>
                                    {price}
                                </p>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ProductsCom
