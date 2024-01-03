import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addItemToCart } from '../../store/Slices/sliceCart';
import { Toaster, toast } from 'sonner';

interface Product {
    id: string; // Asegúrate de incluir la propiedad 'id'
    name: string;
    artist: string;
    price: number;
    img: string;
}

const ProductDetail: React.FC = () => {
    const { productId } = useParams<{ productId: any }>();
    const [product, setProduct] = useState<Product | null>(null);
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {

        const productIdNumber = parseInt(productId, 10);
    
        fetch(`https://nagai-bab28-default-rtdb.europe-west1.firebasedatabase.app/paints/${productIdNumber + 1}.json`)
            .then(res => res.json())
            .then((data: Product) => {
                setProduct(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [productId]);

    const addToCart = (product: Product) => {
        dispatch(addItemToCart(product));
        toast.success('Product added to cart', {
            duration: 2000,
        })
        console.log("Adding to cart:", { id: product.id });
    };

    return (
        <>
            <Header isAuthenticated={isAuthenticated} />
            <div className='mb-20'>
                <div className="hero mt-20 bg-base-100 font-inter w-1/2 m-auto">
                    <div className="hero-content flex-col lg:flex-row space-x-6">
                        {product && (
                            <img src={product.img} className="max-w-sm rounded-lg shadow-2xl" alt={product.name} />
                        )}
                        <div className='flex flex-col items-start font-inter'>
                            {product && (
                                <>
                                    <h1 className="text-5xl font-bold">{product.name}</h1>
                                    <p className='font-regular text-xl text-secondary'>By {product.artist}</p>
                                    <p className='text-start font-light text-2xl mt-3'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <p className="py-6 text-start font-semibold text-4xl">{product.price}€</p>
                                    <button className="btn btn-primary transition-transform transform hover:scale-105" onClick={(event) => {
                                    event.preventDefault();
                                    addToCart(product);
                                }}>Add to cart</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Toaster toastOptions={{
                    style: {
                        background: 'black',
                        color: "white"
                    },
                    className: 'my-toast',
                }} />
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;






