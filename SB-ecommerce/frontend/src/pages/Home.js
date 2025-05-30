import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { useSearchParams } from "react-router-dom";


export default function Home() {
    const [products, setProducts] = useState([]);
    const[searchParams, setSearchParams] = useSearchParams();
    useEffect(() =>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then((res) => res.json())
        .then((res) => setProducts(res.products))
    },[searchParams])
    console.log(products)
    return (
        <>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {products.map((product) => {
                       return <ProductCard  product={product}/>
                    })}
                </div>
            </section>
        </>
    )
}