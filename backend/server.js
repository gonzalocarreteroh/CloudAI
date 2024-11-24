import express from 'express';
import multer from 'multer';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

const upload = multer();

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  try {
    // Convert the file buffer to base64 (required for SageMaker endpoint)
    const fileBase64 = file.buffer.toString('base64');

    // Replace with SageMaker endpoint URL
    const endpointUrl = 'https://sagemaker-endpoint.amazonaws.com';

    // Send the image to the SageMaker endpoint
    const response = await axios.post(
      endpointUrl,
      { image: fileBase64 },
      { headers: { 'Content-Type': 'application/json' } }
    );

    // Return prediction from SageMaker endpoint to the frontend
    res.send({ prediction: response.data.prediction });
  } catch (error) {
    console.error('Error calling SageMaker endpoint:', error);
    res.status(500).send({ message: 'Error processing file' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
