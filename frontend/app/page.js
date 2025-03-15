"use client";
import { useState } from "react";
import UploadPage from "./upload/page";
import DetectionResults from "../components/DetectionResults";

export default function Dashboard() {
  const [results, setResults] = useState([]);

  // Function to update detection results after an upload
  const handleNewResult = (newResult) => {
    setResults([...results, newResult]); // Append new result
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">License Plate Detection Dashboard</h1>
      
      {/* Upload Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Upload Image/Video</h2>
        <UploadPage onUploadSuccess={handleNewResult} />
      </div>

      {/* Detection Results Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Detection Results</h2>
        {results.length > 0 ? (
          <DetectionResults results={results} />
        ) : (
          <p className="text-gray-500">No results yet. Upload an image or video to see results.</p>
        )}
      </div>
    </div>
  );
}
