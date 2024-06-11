

import { useParams } from "react-router-dom";
import { Footer } from "../footer/footer";
import Navbar from "../navbar/navbar";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/products";
import axios from "axios";
import './category.css'

const Category=()=>{
    const [products,setProducts]=useState<Product[]>([]);
    const { id } = useParams<{id:string}>();

    useEffect(()=>{
        const fetChData=async ()=>{
           const response= await axios.get(`http://localhost:3000/products?categoryid=${id}`)
            
                setProducts(response.data);
            

        }
        fetChData();
    },[id])
   
    // console.log(id );
    return (
        <div>
            <Navbar/>
            <div className="category-cards">
                        {products.map((product) => {
                            return (
                                <div className='category-card' key={product.id}>
                                    <img src={product.imageurl} alt="books" />
                                    <div className='category-card-info'>
                                        <h2 className='category-card-title'>{product.name}</h2>
                                        <span className='category-price-tag'>Ksh.{product.price}</span> <br />
                                        <button className='category-cart-btn'>Add to Cart</button>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
            <Footer/>

        </div>
    );
}

export default Category;