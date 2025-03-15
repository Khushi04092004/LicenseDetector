import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";

const DetectionResults = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No results available. Upload an image/video to detect license plates.
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Detection Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <Card key={index} className="border rounded-lg shadow-md p-4">
            <CardContent>
              <img
                src={result.imageUrl}
                alt={`Detection ${index + 1}`}
                className="w-full h-48 object-cover rounded"
              />
              <Table className="mt-3">
                <TableHead>
                  <TableRow>
                    <TableCell className="font-semibold">License Plate</TableCell>
                    <TableCell className="font-semibold">Confidence</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {result.plates.map((plate, i) => (
                    <TableRow key={i}>
                      <TableCell>{plate.text}</TableCell>
                      <TableCell>{(plate.confidence * 100).toFixed(2)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DetectionResults;
