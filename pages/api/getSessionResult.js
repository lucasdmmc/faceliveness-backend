import { getRekognitionClient } from '../../helpers/rekognition.js';

export async function getSessionResultHandler(req, res) {
    const rekognition = await getRekognitionClient();
    const response = await rekognition.getFaceLivenessSessionResults(req.data.sessionId).then();
    
    res.status(200).json({
        sessionId: response.SessionId,
        confidence: response.Confidence,
    });
}
