import express from 'express'
const app = express();

import { createSessionHandler } from './pages/api/createSession.js'

// import { getRekognitionClient } from './helpers/rekognition.js';

// async function handler(req, res) {
//     const rekognition = await getRekognitionClient();
//     const response = await rekognition.createFaceLivenessSession().then();
    
//     res.status(200).json({
//         sessionId: response.SessionId,
//     });
// }

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.get("/api/createSession", async (request, response) =>{
    const result = await createSessionHandler(request, response)
})

app.get("/api/getFaceLivenessResults", async (request, response) =>{
    //const result = await 
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});