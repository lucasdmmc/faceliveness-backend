import { getRekognitionClient } from '../../helpers/rekognition.js';

export async function createSessionHandler(request, response) {
  try {
    const rekognition = await getRekognitionClient();
    const rekognitionResponse = await rekognition.createFaceLivenessSession().then();
    const sessionId = rekognitionResponse.SessionId;
    
    response.status(200).json({ sessionId });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}