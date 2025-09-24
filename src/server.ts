
import dotenv from 'dotenv'
dotenv.config();
import app from './index.ts';
import mongoose from 'mongoose';

// eslint-disable-next-line no-undef
const PORT: number = Number(process.env.PORT) || 5000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let server;
// eslint-disable-next-line prefer-const, no-undef
let uri = process.env.MONGODB_URI;



const startServer = async () => {
  try {
    if (!uri) {
      throw new Error('mongoDb uri not founded');
    }

    await mongoose.connect(uri);
    console.log('db connected');
    server = app.listen(PORT, () => {
      console.log(`server on running on this port ${PORT}`);
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(error)
  }
};

startServer();

// process for error handling

process.on('SIGINT', () => {
  console.log('server shut down');

  process.exit(1);
});

// uncaught execption

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Perform cleanup if needed
  process.exit(1); // Exit with error
});
