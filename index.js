import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

import { createSessionHandler } from './pages/api/createSession.js'

import { getSessionResultHandler } from './pages/api/getSessionResult.js'

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.get("/api/createSession", async (request, response) =>{
    const result = await createSessionHandler(request, response)
})

app.get("/api/getFaceLivenessResults", async (request, response) =>{
    const result = await getSessionResultHandler(request, response)
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});