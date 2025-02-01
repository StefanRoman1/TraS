import React, { useContext } from 'react'
import "../assets/styles/TrafficSignInfo.css";
import TrafficSignCard from './TrafficSignCard';
import { TrafficSignContext } from './TrafficSignContext';

function TrafficSignInformation() {
  const { detections, loading } = useContext(TrafficSignContext);
  
  return (
    <div className='trafficSignInformationContainer'>
      <span className='trafficSignInfoTitle'>Traffic Signs Ontology Details</span>

      {
      !loading && detections?.length > 0 && (detections?.map((detection, index)=>{
        const {bbox, class: trafficSignClass, confidence, ontologyDetails} =  detection
        return <TrafficSignCard key={index} id ={index} trafficSignClass={trafficSignClass['trafficSign']} ontologyDetails={ontologyDetails} confidence={confidence.toFixed(2)}/>
      }))
      }

      {
      !loading && detections?.length == 0 && (<h1>No traffic signs to detect!</h1>)  
      }

      {
      loading && (<div className="loader"> </div>)
      }
    </div>
  )
}

export default TrafficSignInformation