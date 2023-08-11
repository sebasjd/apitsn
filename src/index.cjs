import app from './app.cjs';
import { connectDB } from './db.js';

connectDB();
app.listen(process.env.PORT || 3000);
console.log('Server on port', 3000);