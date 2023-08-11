import app from './src/app.js';
import { connectDB } from './src/db.js';

connectDB();
app.listen(process.env.PORT || 3000);
console.log('Server on port', 3000);