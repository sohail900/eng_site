import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import PageLayout from '../../layouts/PageLayout'
import productContents from '../../content/productsContents.json'
import './style.css'
const ProductDetails = () => {
    const [totalPro, setTotalPro] = useState(1)
    const { id } = useParams() // get paramater from url
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const data = productContents.productsData.filter(
        (elem) => elem.id === parseInt(id, 10)
    ) // return product that matched
    const pageTitle = [
        { path: '../products', title: 'Products' },
        { path: '.', title: data[0].title },
    ]
    return (
        <>
            <PageLayout pageTitle={pageTitle} pageName={data[0].title} />
            <section className='w-full px-10 flex justify-center flex-wrap gap-10 mt-10 md:flex-nowrap'>
                <div className='w-full md:w-[50%] xl:w-[40%] overflow-hidden shadow-customShadow'>
                    <img
                        src={data[0].image}
                        alt={data[0].image}
                        className='w-full transition-all hover:scale-125'
                    />
                </div>
                <div className='w-full md:w-[50%] xl:w-[40%]'>
                    <h1 className='text-2xl font-bold text-primary_color mb-6'>
                        {data[0].price}
                    </h1>
                    <hr className='bg-[rgba(0,0,0,0.1)] border-none outline-none w-full h-[1px]' />
                    <div className='mt-4 text-lg text-semibold text-color_light'>
                        <p>
                            The Makita 18V Mobile Driver Drill is capable of any
                            drilling or fixing task whether it be at the job
                            work-site or at home. All metal gear construction
                        </p>
                        <ul className='cart_desc mt-3'>
                            <li>
                                NEW 12VMax XR Li-Ion compact drill driver
                                featuring
                            </li>
                            <li>Compact and lightweight design</li>
                            <li>100 day return policy</li>
                            <li>FREE SHIPPING OVER $38</li>
                        </ul>
                    </div>
                    <div className='flex gap-1 items-center mt-6'>
                        <Minus
                            size={20}
                            className='cursor-pointer'
                            onClick={() =>
                                setTotalPro((val) => (val > 0 ? val - 1 : val))
                            }
                        />
                        <input
                            type='text'
                            name='number'
                            maxLength={2}
                            className='px-3 py-2 w-[50px] text-center border-2 border-[rgba(0,0,0,0.3)] rounded-md font-semibold'
                            value={totalPro}
                            onChange={(e) => setTotalPro(e.target.value)}
                        />
                        <Plus
                            size={20}
                            className='cursor-pointer'
                            onClick={() => setTotalPro((val) => val + 1)}
                        />
                    </div>
                    <button className='px-5 py-3 bg-primary_color rounded-md flex items-center justify-center mt-5 gap-2 text-white'>
                        <ShoppingCart size={20} /> Add to Cart
                    </button>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
