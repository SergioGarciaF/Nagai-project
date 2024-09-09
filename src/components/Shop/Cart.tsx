import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { RootState } from '../../store/store';
import { removeFromCart } from '../../store/Slices/sliceCart';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    interface CartItem {
        id: string;
        name: string;
        price: number;
        img: string;
    }
    const cartItems: CartItem[] = useSelector((state: RootState) => state.addToCart.cartArray);

    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const calcTotal = cartItems.reduce((total, item) => {
        return total + item.price;
    }, 0);

    const handleDelete = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const handleCheckout = async () => {
        try {
            console.log('Iniciando la solicitud de pago...');
    
            const response = await fetch('https://nagai-project.vercel.app/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cartItems }),
            });
    
            console.log('Respuesta recibida:', response);
    
            if (!response.ok) {
                throw new Error('Error al crear la sesión de pago');
            }
    
            const session = await response.json();
            console.log('Sesión creada:', session);
    
            // Redirigir a la URL de la sesión de Stripe
            window.location.href = session.url; 
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
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-screen max-w-3xl p-6 mx-auto space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <h3 className='text-6xl'>Your cart is empty.</h3>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen max-w-3xl p-6 mx-auto space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y dark:divide-gray-700">
                        {cartItems.map((item: CartItem, index) => (
                            <li className="flex flex-col py-6 sm:flex-row sm:justify-between" key={index}>
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                    <img className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500" src={item.img} />
                                    <div className="flex flex-col justify-between w-full pb-4">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1 text-start">
                                                <h3 className="text-lg font-semibold leading sm:pr-8">{item.name}</h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold">{item.price}€</p>
                                            </div>
                                        </div>
                                        <div className="flex text-sm divide-x">
                                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1" onClick={() => handleDelete(item.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                    <rect width="32" height="200" x="168" y="216"></rect>
                                                    <rect width="32" height="200" x="240" y="216"></rect>
                                                    <rect width="32" height="200" x="312" y="216"></rect>
                                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                </svg>
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="space-y-1 text-right">
                        <p>Total amount:
                            <span className="font-semibold"> {calcTotal} €</span>
                        </p>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Link to="/shop"><button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                            <span className="sr-only sm:not-sr-only"> to shop</span>
                        </button></Link>
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400" onClick={handleCheckout}>
                            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Cart;
