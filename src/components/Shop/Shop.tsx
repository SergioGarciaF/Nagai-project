import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataSnapshot, get, getDatabase, ref } from "firebase/database";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import firebaseApp from '../../firebase/app';
import { addItemToCart } from "../../store/Slices/sliceCart";
import { RootState } from "../../store/store";

interface Product {
    name: string;
    artist: string;
    price: number;
    img: string;
    id: string;
}

const Shop: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    useEffect(() => {
        const productIDs: string[] = Array.from({ length: 19 }, (_, index) => (index + 1).toString());

        const fetchData = async () => {
            try {
                const database = getDatabase(firebaseApp);
                const productPromises = productIDs.map((id) =>
                    get(ref(database, `paints/${id}`)).then((snapshot: DataSnapshot) => ({
                        ...snapshot.val(),
                        id: snapshot.key,
                    }))
                );

                const productData = await Promise.all(productPromises);
                setProducts(productData as Product[]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const addToCart = (product: Product) => {
        dispatch(addItemToCart(product));
        alert('Item added');
        console.log("Adding to cart:", { id: product.id });
    };

    return (
        <>
            <Header isAuthenticated={isAuthenticated}/>
            <h2 className="font-inter font-semibold text-lg mt-20 mb-8">Shop</h2>
            <div className="flex justify-center items-center w-1/2 mx-auto">
                <div className="flex flex-wrap justify-center gap-20 mt-3 mb-20 p-10">
                    {products.map((product, index) => (
                        <div key={index + 1}>
                            <Link to={`/product-detail/${index}`}>
                                <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={product.img} width={200} height={100} alt="" />
                            </Link>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className='text-start font-inter font-semibold text-sm mt-2'>{product.name}</h3>
                                    <p className='text-start text-secondary font-inter font-regular text-sm'>By {product.artist}</p>
                                    <p className='text-start font-inter font-regular text-sm'>{product.price}€</p>
                                </div>
                                <button className="btn btn-xs btn-outline btn-neutral mt-3" onClick={(event) => {
                                    event.preventDefault();
                                    addToCart(product);
                                }}>Add to cart</button>
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
