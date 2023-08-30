import express from 'express';
import authRoutes from './routes/auth.routes.js';
import favoriteRoutes from './routes/favorites.routes.js';
import newsRoutes from './routes/news.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'https://techsidenews.vercel.app',
  methods: 'GET, POST, PUT, DELETE',
  optionsSuccessStatus: 204,
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", favoriteRoutes);
app.use("/api", newsRoutes);

export default app;