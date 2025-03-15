"use client";
import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/upload", formData);
      setMessage(response.data.message);
      setFileUrl(response.data.url); // Store uploaded file URL
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upload Image/Video</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={handleUpload}
      >
        Upload
      </button>
      {message && <p className="mt-2">{message}</p>}
      {fileUrl && (
        <div className="mt-4">
          <p className="text-green-600">File uploaded successfully!</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            View File
          </a>
        </div>
      )}
    </div>
  );
}
