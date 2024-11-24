import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();

app.use(cors());

const upload = multer();

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  // File is saved in the 'uploads/' directory
  console.log('File received:', file);

  // You can process the file here or send it to Hadoop
  res.send({ message: 'File received successfully', file });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
