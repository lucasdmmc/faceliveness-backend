import { getRekognitionClient } from '../../helpers/rekognition.js';

export async function createSessionHandler(req, res) {
  try {
    const rekognition = await getRekognitionClient();
    console.log('Creating FaceLiveness Session')
    const { SessionId } = await rekognition.createFaceLivenessSession();
    console.log('FaceLiveness Session was created successfully!')
    res.status(200).json({ sessionId: SessionId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error! It was not possible to create a liveness session' });
  }

//   const rekognition = await getRekognitionClient();
//     const response = rekognition.createFaceLivenessSession().then();
    
//     res.status(200).json({
//         sessionId: response.SessionId,
//     });
}
