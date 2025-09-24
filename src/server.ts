import { start } from 'repl';
import app from './index.ts';
import { createModuleResolutionCache } from 'typescript';
import { mongo } from 'globals';
import mongoose from 'mongoose';


const PORT: Number = Number(process.env.PORT) || 5000;

let server;
let uri=process.env.MONGODB_URI;
const startServer = async () => {
  try {

    if(!uri)
    {
        throw new Error('mongoDb uri not founded')
    }

    await mongoose.connect(uri)
    server = app.listen(PORT, () => {
      console.log(`server on running on this port ${PORT}`);
    });
  } catch (error) {}
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
