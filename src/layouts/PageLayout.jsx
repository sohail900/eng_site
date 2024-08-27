import { Link } from 'react-router-dom'
import bgPageTitle from '/assets/bg-pagetitle.jpg'
import PropTypes from 'prop-types'
import { ChevronsRight } from 'lucide-react'
const PageLayout = ({ pageName = 'Page Name', pageTitle }) => {
    //@ check the "PageTitle" props is array or not
    //@ if not then convert them to Array
    const normalizedPageTitle = Array.isArray(pageTitle)
        ? pageTitle
        : [pageTitle]
    const links = [{ path: '../', title: 'Home' }, ...normalizedPageTitle]
    return (
        <>
            <section className='w-full h-[25rem] relative text-white '>
                <img
                    src={bgPageTitle}
                    alt='bgpagetitle'
                    className='w-full h-full object-cover absolute top-0 left-0 -z-10'
                />
                <div className='w-full h-full px-10 flex flex-col items-left justify-center z-20 '>
                    <ul className='flex items-center flex-wrap'>
                        {links.map((elem, index) => {
                            const { path, title } = elem
                            console.log(index)
                            return (
                                <>
                                    <li
                                        key={index}
                                        className='text-lg text:text-xl'
                                    >
                                        <Link to={`${path}`}>{title}</Link>
                                    </li>
                                    {index < links.length - 1 && (
                                        <ChevronsRight
                                            size={23}
                                            className='mt-1 mr-1'
                                        />
                                    )}
                                </>
                            )
                        })}
                    </ul>
                    <h1 className='text-3xl sm:text-5xl mt-6 font-semibold'>
                        {pageName}
                    </h1>
                </div>
            </section>
        </>
    )
}

PageLayout.propTypes = {
    pageName: PropTypes.string,
    pageTitle: PropTypes.shape({
        link: PropTypes.string,
        title: PropTypes.string,
    }),
}

export default PageLayout
