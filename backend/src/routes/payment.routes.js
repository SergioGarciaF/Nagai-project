import { Router } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51ImKJBKDjhdegL1lpj7LYGxyj4JyZe4uy7q75bvlpOl4j6nwBRM1XtnKMwSZiNARCrasYlILiqa5cLwCubc9ZI9m00OL5m336A');

const router = Router();

router.post('/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body; // Asegúrate de enviar 'cartItems' desde el frontend
  
    const line_items = cartItems.map(item => {
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
            images: [item.img],
          },
          unit_amount: item.price * 100, // Stripe espera el precio en centimos
        },
        quantity: 1, // Asume que la cantidad es 1 por ahora
      };
    });
  
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });
  
    return res.json(session);
  });

router.get('/success', (req, res) => res.send('success'));
router.get('/cancel', (req, res) => res.send('cancel'));

export default router;
