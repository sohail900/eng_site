import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layouts/navbar/Navbar'
import Loading from './components/Loading'
import Footer from './layouts/footer/Footer'
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/aboutPage/About'))
const Services = lazy(() => import('./pages/servicesPage/Services'))
const Contact = lazy(() => import('./pages/contactPage/Contact'))
const ServicesDetails = lazy(() =>
    import('./pages/servicesPage/ServicesDetails')
)
const Products = lazy(() => import('./pages/productsPage/Products'))
const ProductDetails = lazy(() => import('./pages/productsPage/ProductDetails'))
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'))
function App() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services' element={<Services />}></Route>
                    <Route
                        path='/services/details/:slug'
                        element={<ServicesDetails />}
                    />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                    <Route path='/portfolios' element={<Portfolio />} />
                </Routes>
                <Footer />
            </Suspense>
        </>
    )
}

export default App
