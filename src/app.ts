import express from 'express';
import carRoute from './Routes/CarRoute';
import motorcycleRoute from './Routes/MotorcycleRoute';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(motorcycleRoute);

export default app;
