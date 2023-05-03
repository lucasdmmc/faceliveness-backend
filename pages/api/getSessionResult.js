import { getRekognitionClient } from '../../helpers/rekognition.js';

export async function getSessionResultHandler(sessionID) {
  try {
    const rekognition = await getRekognitionClient();
    const response = await rekognition.getFaceLivenessSessionResults({ SessionId: sessionID });
    
    if (!response) {
      return {
        sessionId: null,
        confidence: null,
      };
    }
    
    const sessionId = response.SessionId;
    const confidence = response.Confidence;
    
    return { sessionId, confidence };
  } catch (error) {
    console.error(error);
    return { message: 'Internal Server Error' };
  }
}
