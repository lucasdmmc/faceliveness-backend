import { getRekognitionClient } from '../../helpers/rekognition.js';

export async function createSessionHandler(req, res) {
    const rekognition = await getRekognitionClient();
    const response = await rekognition.createFaceLivenessSession().then();
    
    res.status(200).json({
        sessionId: response.SessionId,
    });
}
