import express from 'express';
import authRoutes from './routes/auth.routes.js';
import favoriteRoutes from './routes/favorites.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", favoriteRoutes);

export default app;