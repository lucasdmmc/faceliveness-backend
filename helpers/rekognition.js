import { Amplify, withSSRContext } from 'aws-amplify';
import { Rekognition } from '@aws-sdk/client-rekognition';
import awsExports from '../src/aws-exports.js';

// Configura o Amplify para trabalhar no ambiente do servidor (server-side rendering)
Amplify.configure({ ...awsExports, ssr: true });

export async function getRekognitionClient(req) {
  
  const { Credentials } = withSSRContext({req});
  
  const credentials = await Credentials.get();

  // Cria o cliente do Amazon Rekognition.
  const rekognitionClient = new Rekognition({
    region: 'us-east-1',
    credentials,
    endpoint: 'https://rekognition.us-east-1.amazonaws.com',
  });

  return rekognitionClient;
}