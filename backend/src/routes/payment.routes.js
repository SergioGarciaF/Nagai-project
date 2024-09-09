import { Router } from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

// Carga las variables de entorno del archivo .env
dotenv.config();

// Inicializa Stripe con la clave secreta desde el archivo .env
const stripe = new Stripe(import.meta.env.VITE_STRIPE_URL);

const router = Router();

router.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;


  const success_url = 'https://nagai-project2.vercel.app/success';  
  const cancel_url = 'https://nagai-project2.vercel.app/cancel';    

  // Mapeo de los items del carrito para crear la sesión de pago en Stripe
  const line_items = cartItems.map(item => {
    return {
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: [item.img],  // Asegúrate de que las imágenes estén correctamente referenciadas
        },
        unit_amount: item.price * 100,  // Precio en centavos
      },
      quantity: 1,  // Ajusta la cantidad según lo que desees
    };
  });

  try {
    // Crea la sesión de Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url,
      cancel_url,
    });

    // Devuelve la sesión de Stripe como respuesta
    return res.json({ url: session.url });
  } catch (error) {
    console.error('Error al crear la sesión de pago:', error);
    res.status(500).json({ error: 'No se pudo crear la sesión de pago' });
  }
});

router.get('/success', (req, res) => res.redirect('/success'));
router.get('/cancel', (req, res) => res.redirect('/'));

export default router;
