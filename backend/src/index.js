import express from 'express';
import paymentRoutes from './routes/payment.routes.js';
import { PORT } from './config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const app = express(); 

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

app.post('/api/set-cookie', (req, res) => {
    const { sessionToken } = req.body;
    if (!sessionToken) {
      return res.status(400).json({ message: 'Token de sesión no proporcionado' });
    }
    //Con esto hacemos que las cookies que tengamos caduquen al dia siguiente.
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    // Intenta establecer la cookie
    try {
      res.cookie('session_token', sessionToken, {
        httpOnly: true,
        secure: true, // Asegúrate de que tu sitio esté usando HTTPS
        sameSite: 'strict',
        expires: expirationDate,
      });
      res.status(200).json({ message: 'Cookie establecida' });
    } catch (error) {
      res.status(500).json({ message: 'Error al establecer la cookie' });
    }
  });

app.use(paymentRoutes);


app.listen(PORT);
console.log('Server on port', PORT); 