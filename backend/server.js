import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();

// Define the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Save files to 'uploads/' folder
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Use the original file name or add a timestamp to avoid conflicts
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Set up multer with the storage configuration
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  // File is saved in the 'uploads/' directory
  console.log('File saved:', file);

  // You can process the file here or send it to Hadoop
  res.send({ message: 'File uploaded successfully', file });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
