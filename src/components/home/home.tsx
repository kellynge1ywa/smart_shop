import './home.css'
// import image from '../../assets/img/books.jpg'
import { useEffect, useState } from 'react';
import { Category } from '../../interfaces/categories';
import axios from 'axios';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from '../../interfaces/products';
import { Footer } from '../footer/footer';
import Navbar from '../navbar/navbar';
import { NavLink } from 'react-router-dom';





export const Home = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const [categories, setCategories] = useState<Category[]>([])
    const [topProducts, setTopProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetChData = async () => {
            await axios.get('http://localhost:5143/api/Category')
                .then((response) => {
                    console.log(response.data)

                    setCategories(response.data.result)
                })

        }
        fetChData();

    }, [])

    useEffect(() => {
        const fetChData = async () => {
            await axios.get('http://localhost:5143/api/Product')
                .then((response) => {
                    setTopProducts(response.data.result)
                })

        }
        fetChData();

    }, [])
    return (
        <div className='container1' >
            <Navbar/>
            <div className="second-section">
                <div className='container-content'>
                    <h2>Shopping And Department Store</h2>
                    <div className='paragraph'>
                        <span>
                            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                        </span>
                    </div>
                    <button className='btn1'>
                        Learn More
                    </button>
                </div>


            </div>
            <div>
                <div className='categories'>
                    <h2 className='category-title'>Shop Our Top Categories</h2>

                    <div className='cards '>
                        <Carousel responsive={responsive}>
                            {categories.map((category) => {
                                return (
                                    <NavLink to={`/${category.id}`} key={category.id}>
                                        <div className='card' key={category.id}>
                                        <img src={category.imageURL} alt="books" />
                                        <h2 className='card-title'>{category.name}</h2>
                                        <button>View</button>
                                    </div>

                                    </NavLink>
                                    
                                )
                            })}

                        </Carousel>


                        {/* {categories.map((category) => {
                                return (
                                    <div className='card' key={category.id}>
                                        <img src={category.imageurl} alt="books" />
                                        <h2 className='card-title'>{category.name}</h2>
                                    </div>
                                )
                            })} */}
                    </div>


                </div>
                <div className='top-products'>
                    <h2 className='top-products-title'>Top Products</h2>
                    <div className="cards1">
                        {topProducts.map((product) => {
                            return (
                                <div className='card1' key={product.id}>
                                    <img src={product.imageURL} alt="books" />
                                    <div className='card-info'>
                                        <h2 className='card-title'>{product.name}</h2>
                                        <span className='price-tag'>Ksh.{product.price}</span> <br />
                                        <button className='cart-btn'>Add to Cart</button>
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>
                <div className='coupon'>
                    <div className='coupon-card'>
                        <h2 className='coupon-title'>Get 5% Cash Back On Ksh 30,000</h2>
                        <span className='coupon-content'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance</span> <br />
                        <button className='coupon-btn'>Learn More</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}