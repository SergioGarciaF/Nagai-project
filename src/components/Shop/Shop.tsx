import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Product {
    name: string;
    artist: string;
    price: number;
    img: string;
}

const Shop: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedArtist, setSelectedArtist] = useState<string>("Jean Dupont");

    useEffect(() => {
        // Si tienes un ID específico para cada producto, puedes hacer algo como esto
        const productIDs: string[] = Array.from({ length: 19 }, (_, index) => (index + 1).toString()); 

        
        Promise.all(productIDs.map(id =>
            fetch(`https://nagai-bab28-default-rtdb.europe-west1.firebasedatabase.app/paints/${id}.json`)
                .then(res => res.json())
        ))
        .then((data: Product[]) => {
            const filteredProducts = data.filter(product => product.artist === selectedArtist);
            setProducts(filteredProducts);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [selectedArtist]);

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center me-12 mt-20 mb-10 m-auto">
                <h2 className="font-inter font-semibold text-lg mb-5">Shop</h2>
                <select
                    className="select select-neutral select-xs max-w-xs"
                    onChange={(e) => setSelectedArtist(e.target.value)}
                    value={selectedArtist}
                >
                    <option disabled>Select artist</option>
                    <option>Jean Dupont</option>
                    <option>Millie Harrison</option>
                    <option>Mateo García</option>
                </select>
            </div>
            <div className="flex flex-wrap justify-center gap-20 mt-3">

                {products.map((product, index) => (
                    <div key={index}>
                        <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={product.img} width={200} height={100} alt="" />
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className='text-start font-inter font-semibold text-sm mt-2'>{product.name}</h3>
                                
                                <p className='text-start font-inter font-regular text-sm'>{product.price}€</p>
                            </div>
                            <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Shop;
