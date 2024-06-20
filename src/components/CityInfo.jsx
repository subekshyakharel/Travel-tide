import React, { useState, useEffect } from 'react';
import { getCityInfo } from '../axios/api';



const CityInfo = ({ city }) => {
  const [cityInfo, setCityInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCityInfo(city);
      console.log("This is data", data)
      setCityInfo(data);
    };
    fetchData();
  }, [city]);

  if (!cityInfo) return <div>Loading...</div>;

  return (
    <div>
      <h1>Places in {city}</h1>
      <ul>
        {cityInfo.map(place => (
          <li key={place.fsq_id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityInfo;
