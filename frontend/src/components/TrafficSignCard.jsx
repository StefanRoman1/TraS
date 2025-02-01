import React from 'react'
import "../assets/styles/TrafficSignCard.css"

function TrafficSignCard({id, trafficSignClass, ontologyDetails}) {
  return (
    <div className='trafficSignCard'>
        <span className='trafficSignId'>{`${id+1}. ${trafficSignClass}`}</span>
        <div className="trafficSignOntologyDetails">
            {Object.keys(ontologyDetails)?.map((key, index)=>{
                return (
                    <div key={index} className='ontologyItem'>
                        <span className='ontologyItemName'>{`${key}: `}</span>
                        <span>{ontologyDetails[key]}</span>
                    </div>  
                )
            })}
        </div>
    </div>
  )
}

export default TrafficSignCard