// pages/api/get.js

import { getRekognitionClient } from '../../helpers/rekognition';

function isLiveFace(confidence) {
    return confidence > 90;
}

export default async function handler(request, response) {
    const rekognitionClient = await getRekognitionClient(request);
    const { sessionId, confidence } = await rekognitionClient.getFaceLivenessSessionResults({
        SessionId: request.query.sessionId,
    }).promise();

    const isLive = isLiveFace(confidence);
    
    response.status(200).json({
        isLive,
    });
}