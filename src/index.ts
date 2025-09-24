import express from 'express';
import type { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Server running on port 5000');
});

// not founded route
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    status: false,
    message: 'No Route Founded',
    data: `No Route Founded based on this ${req.url} please enter correct route`,
  });
});

export default app;
