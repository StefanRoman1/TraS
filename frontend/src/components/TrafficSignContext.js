import React, { createContext, useState } from "react";

export const TrafficSignContext = createContext();

export const TrafficSignProvider = ({ children }) => {
  const [detections, setDetections] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <TrafficSignContext.Provider value={{ detections, setDetections, loading, setLoading }}>
      {children}
    </TrafficSignContext.Provider>
  );
};