
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { RootState } from '../../store/store';
import { removeFromCart } from '../../store/Slices/sliceCart';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.addToCart.cartArray);
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const [productQuantities, setProductQuantities] = useState<{ [productId: string]: number }>(
        cartItems.reduce((quantities, item) => {
            quantities[item.id] = 1;
            return quantities;
        }, {} as { [productId: string]: number })
    );

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: newQuantity,
        }));
    };
    
    const calcTotal = cartItems.reduce((total, item) => {
        // Verifica si productQuantities[item.id] está definido antes de usarlo
        const quantity = productQuantities[item.id] || 1; // Si no está definido, utiliza 1 como valor predeterminado
        return total + item.price * quantity;
    }, 0);
    const handleDelete = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const handleCheckout = async () => {
        try {
            console.log('Iniciando la solicitud de pago...');
            const response = await fetch('http://localhost:4000/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cartItems, productQuantities }),
            });

            console.log('Respuesta recibida:', response);

            if (!response.ok) {
                throw new Error('Error al crear la sesión de pago');
            }

            const session = await response.json();
            console.log('Sesión creada:', session);

            window.location.href = session.url; // Redirige al usuario a la pasarela de pago de Stripe
        } catch (error) {
            console.error('Error al procesar el pago:', error);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated]);


    return (
        <>
            <Header isAuthenticated={isAuthenticated} />
            <div className='flex justify-center items-center mb-20'>
                {cartItems.length === 0 ? (
                    <div>
                        <div className='font-inter mt-20 text-lg m-auto min-h-screen'>Your cart is empty.</div>
                    </div>
                ) : (
                    <div className='flex justify-center space-x-6'>
                        <div className='flex flex-wrap w-1/2 gap-6 mt-20 font-inter'>
                            {cartItems.map((item: any, index) => (
                                <div key={index} className='flex flex-col flex-basis-1/2 gap-2'>
                                    <img src={item.img} width={200} alt="" />
                                    <div className="flex flex-col gap-2">
                                        <h3 className='font-inter font-semibold text-sm'>{item.name}</h3>
                                        <p className='font-inter font-regular text-sm'>{item.price}€</p>
                                        <input
                                            type="number"
                                            placeholder="Quantity"
                                            className="input input-bordered input-sm w-full max-w-xs"
                                            min={1}
                                            value={productQuantities[item.id]}
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                        />
                                        <button className="btn btn-xs btn-outline btn-neutral" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <p className='font-inter text-sm'>Name:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-inter text-sm'>Last name:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-inter text-sm'>Address:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-inter text-sm'>Postal code:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-semibold text-lg mt-8'>Total: {calcTotal}€</p>
                            <button className="btn btn-xs btn-outline btn-neutral mt-3" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Cart;
