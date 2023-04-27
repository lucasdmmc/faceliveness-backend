import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json())

import { createSessionHandler } from './pages/api/createSession.js'

import { getSessionResultHandler } from './pages/api/getSessionResult.js'

app.get("/api/createSession", async (request, response) => {
    const sessionId = await createSessionHandler(request, response)
    console.log(sessionId)
    // response.json({ sessionId })
})

app.get("/api/getFaceLivenessResults", async (req, res) => {
    const result = await getSessionResultHandler(req.query.sessionId);
    console.log(result)
    res.json(result)
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});