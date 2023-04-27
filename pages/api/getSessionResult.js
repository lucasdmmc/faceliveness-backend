import { getRekognitionClient } from '../../helpers/rekognition.js';
import { createSessionHandler } from './createSession.js';

export async function getSessionResultHandler(sessionId) {
    const rekognition = await getRekognitionClient();
    const response = await rekognition.getFaceLivenessSessionResults({ SessionId: sessionId }).then();
    return {
        sessionId: response.SessionId,
        confidence: response.Confidence,
    };
}
