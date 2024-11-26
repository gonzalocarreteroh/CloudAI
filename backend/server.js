import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(cors());

const upload = multer();

if (!process.env.AWS_ACCESS_KEY_ID || 
    !process.env.AWS_SECRET_ACCESS_KEY || 
    !process.env.AWS_BUCKET_NAME || 
    !process.env.AWS_ACCESS_TOKEN) {
  throw new Error('Missing required AWS environment variables');
}

console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS Secret Access Key:', process.env.AWS_SECRET_ACCESS_KEY);
console.log('AWS Bucket Name:', process.env.AWS_BUCKET_NAME);

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_ACCESS_TOKEN, // Only needed for temporary credentials
  region: 'us-east-1'
});
// const AWS = require('aws-sdk');
/*
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
});
*/

( async () => {
  await s3.
  putObject({
    Bucket: "comp4651images",
    Key: 'test.txt',
    Body: 'Hello, World!'
  }).promise();
}
)();

/*
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }

    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
      return res.status(400).send({ message: 'Invalid file type' });
    }

    if (file.size > 5 * 1024 * 1024) {
      return res.status(400).send({ message: 'File size exceeds limit' });
    }

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
      ACL: 'public-read'
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Error uploading file:', err);
        res.status(500).send({ message: 'Error uploading file' });
      } else {
        console.log('File uploaded:', data.Location);
        res.send({ fileUrl: data.Location });
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});
*/

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
