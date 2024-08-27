import { useEffect } from 'react'
import PageLayouts from '../../layouts/PageLayout'
import ProductsCom from '../../components/products/ProductsCom'
import { Search } from 'lucide-react'
const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const pageTitle = { path: '.', title: 'Products' }

    return (
        <>
            <PageLayouts pageName='Products' pageTitle={pageTitle} />
            <section className='px-10 flex flex-wrap gap-9 mt-20 lg:flex-nowrap'>
                <div className='w-full lg:w-[70%]'>
                    <ProductsCom />
                </div>
                <div className='w-auto h-max lg:w-[30%] px-5 '>
                    <div className='w-full relative  justify-center border-2  border-[rgba(0,0,0,0.4) mb-4 hidden lg:flex'>
                        <input
                            type='text'
                            name='search'
                            placeholder='Search Products'
                            className='border-none active:outline-none flex-1 px-2'
                        />
                        <div className='w-[20%] py-3 px-4 border-l-2 border-[rgba(0,0,0,0.1)]'>
                            <Search />
                        </div>
                    </div>
                    <div className='w-full h-max bg-[#EFEFEF] px-3 py-4 rounded-md'>
                        <div>
                            <h1 className='text-2xl text-quaternary_color font-semibold mb-4'>
                                Product Tags
                            </h1>
                            <ul className='flex gap-2 text-sm'>
                                <li className='bg-tertiary_color text-white px-2 py-1  rounded-md'>
                                    Machine
                                </li>
                                <li className='bg-tertiary_color text-white px-2 py-1  rounded-md'>
                                    Tools
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
