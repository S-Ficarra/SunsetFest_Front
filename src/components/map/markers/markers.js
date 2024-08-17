import React, { useState, useRef } from "react";
import './markers.css'
import { AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';

function Markers({ dataArray, backgroundColor, Img}) {

  const [activeIndex, setActiveIndex] = useState(null);
  const markerRefs = useRef([]);


  const handleMarkerClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  console.log(dataArray);
  
  

  return (
    <>
      {dataArray.map((data, index) => (
        <React.Fragment key={index}>
          <AdvancedMarker
            position={data.location}
            ref={(ref) => markerRefs.current[index] = ref}
            onClick={() => handleMarkerClick(index)}
            title={`${data.name}`}
          >
            <Pin
              background={backgroundColor}
              borderColor={backgroundColor}
              scale={1.5}
            >
            <div style={{ width: '100%', display:'flex', justifyContent:'center'}}>
              <img src={Img} alt={`${data.type}`} style={{ width: '75%'}} />
            </div>
            </Pin>
          </AdvancedMarker>
            {activeIndex === index && markerRefs.current[index] && (
              <InfoWindow
                anchor={markerRefs.current[index]}
                onCloseClick={() => setActiveIndex(null)}
              >
                <div className="InfoWindow" key={data.id}>
                  <h2>{data.name}</h2>
                  {data.openingHour && <p>Ouvre à : {data.openingHour}</p>}
                  {data.closingHour && <p>Ferme à : {data.closingHour}</p>}
                  {data.capacity && <p>Capacité de : {data.capacity}</p>}
                  {data.merchType && <p>Magasin de {data.merchType}</p>}
                  {data.foodType && <p>Restaurant de {data.foodType}</p>}
                </div>
              </InfoWindow>
            )}
        </React.Fragment>
      ))}
    </>
  );
}

export default Markers;
