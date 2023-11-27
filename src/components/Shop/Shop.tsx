import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Product {
    name: string;
    artist: string;
    price: number;
    img: string;
    id: string;
}

const Shop: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const productIDs: string[] = Array.from({ length: 19 }, (_, index) => (index + 1).toString());

        Promise.all(productIDs.map(id =>
            fetch(`https://nagai-bab28-default-rtdb.europe-west1.firebasedatabase.app/paints/${id}.json`)
                .then(res => res.json())
        ))
            .then((data: Product[]) => {
                setProducts(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <Header />
            <h2 className="font-inter font-semibold text-lg mt-20 mb-8">Shop</h2>
            <div className="flex justify-center items-center w-1/2 mx-auto">
                <div className="flex flex-wrap justify-start gap-20 mt-3 mb-20 p-10">
                    {products.map((product, index) => (
                        <div key={index + 1}>
                            <Link to={`/product-detail/${index}`}><img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={product.img} width={200} height={100} alt="" /></Link>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className='text-start font-inter font-semibold text-sm mt-2'>{product.name}</h3>
                                    <p className='text-start text-secondary font-inter font-regular text-sm'>By {product.artist}</p>
                                    <p className='text-start font-inter font-regular text-sm'>{product.price}€</p>
                                </div>
                                <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Shop;
