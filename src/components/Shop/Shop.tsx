import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get, getDatabase, ref as dbRef } from "firebase/database"; // Renombra ref a dbRef
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage"; // Importa getDownloadURL y renombra ref a storageRef
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { firebaseApp } from '../../firebase/app';
import { addItemToCart } from "../../store/Slices/sliceCart";
import { RootState } from "../../store/store";
import { Toaster, toast } from "sonner";
import LazyLoad from "react-lazy-load";

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
    const storage = getStorage(firebaseApp); // Inicializa Cloud Storage

    useEffect(() => {
        const productIDs: string[] = Array.from({ length: 19 }, (_, index) => (index + 1).toString());

        const fetchData = async () => {
            try {
                const database = getDatabase(firebaseApp);
                const productPromises = productIDs.map(async (id) => {
                    const snapshot = await get(dbRef(database, `paints/${id}`)); // Usa dbRef
                    const product = snapshot.val();

                    // Obtiene la URL de descarga de la imagen
                    const imageRef = storageRef(storage, product.img); // Usa storageRef
                    const imageUrl = await getDownloadURL(imageRef);

                    return {
                        ...product,
                        img: imageUrl,
                        id: snapshot.key,
                    };
                });

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
        toast.success('Product added to cart', {
            duration: 2000,
        })
        console.log("Adding to cart:", { id: product.id });
    };

    return (
        <>
            <Header isAuthenticated={isAuthenticated} />
            <h2 className="font-inter font-semibold text-lg mt-20 mb-8">Shop</h2>
            <div className="flex justify-center items-center w-full mx-auto">
                <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-20 mt-3 mb-20 p-10">
                    {products.map((product, index) => (
                        <div key={index + 1} className="transition-transform transform hover:scale-110">
                            <LazyLoad>
                                <Link to={`/product-detail/${index}`}>
                                    <img className='shadow-xl max-w-xs lg:max-w-xs lg:transition-opacity lg:duration-300 lg:hover:opacity-70' src={product.img} alt="" />
                                </Link>
                            </LazyLoad>
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

export default Shop;
