import express from 'express';
import cors from 'cors';

import { createSessionHandler } from './pages/api/createSession.js';
import { getSessionResultHandler } from './pages/api/getSessionResult.js';

const app = express();


// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get('/api/createSession', async (request, response) => {
  const sessionId = await createSessionHandler(request, response);
  console.log(sessionId);
});

app.get('/api/getFaceLivenessResults', async (request, response) => {
  const result = await getSessionResultHandler(request.query.sessionId);
  console.log(result);
  response.json(result);
});

//server setup
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});