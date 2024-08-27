import { useState } from 'react'
import { useEffect } from 'react'
import portfolioContent from '../../content/portfolioContent.json'
import PageLayouts from '../../layouts/PageLayout'
import './style.css'
import PortfolioCards from '../../components/portfolio/PortfolioCards'
const Portfolio = () => {
    const [titleData, setTitleData] = useState('All')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const pageTitle = { path: '.', title: 'Portfolio Grid – Masonry' }
    const portfolioData = portfolioContent.portfolioData
    //filtered items from portfolio content...
    const filteredItems = portfolioData.filter((elem) => {
        if (titleData === 'All') return elem
        return elem.title === titleData
    })
    const headerData = [{ title: 'All' }, ...portfolioData]
    console.log(headerData)
    return (
        <>
            <PageLayouts
                pageName='Portfolio Grid – Masonry'
                pageTitle={pageTitle}
            />
            <section className='w-full mt-10 px-10'>
                <div className='w-full flex gap-6 flex-wrap'>
                    {headerData.map((elem) => {
                        const { title, id } = elem
                        return (
                            <>
                                <button
                                    key={id}
                                    className={`${
                                        title === titleData && 'activeBtn'
                                    } text-[1rem] font-semibold text-quaternary_color transition-all duration-300 ease-in-out`}
                                    onClick={() => setTitleData(title)}
                                >
                                    {title}
                                </button>
                            </>
                        )
                    })}
                </div>

                <div className='flex  mt-10 gap-4 flex-wrap'>
                    {filteredItems.map((elem, index) => {
                        const { id, image, title } = elem
                        return (
                            <>
                                <PortfolioCards
                                    id={id}
                                    image={image}
                                    title={title}
                                    key={index}
                                />
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Portfolio
