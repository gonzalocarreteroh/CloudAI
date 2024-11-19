import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  // Indicate the file selected by the user
  const [selected, setSelected] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
    // If a file was selected, setSelected to the file name
    if (event.target.files?.[0]) {
      setSelected(`Selected: ${event.target.files[0].name}`);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    // setSuccess('File uploaded successfully');

    try {
      setSuccess('File uploaded successfully');
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  // Display in UI success message
  return (
    <div className="upload-container">
      <div className="upload-header">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="file-input" 
          id="file-input"
        />
      </div>
      <label htmlFor="file-input" className="file-input-label">
        Choose a File
      </label>
      {selected && <p className="selected-msg">{selected}</p>}
      <button onClick={handleUpload} className="upload-btn">Upload File</button>
      {success && <p className="success-msg">{success}</p>}
    </div>
  );
};

export default FileUpload;