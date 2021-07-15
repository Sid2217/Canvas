import axios from "axios";
import React, { useState, useEffect } from "react";
const gitHubUrl =
  "http://api.weatherstack.com/current?access_key=708a363c0f949c21910cf909044d781c&query=London,United Kingdom";

function Weather() {
  const [userData, setUserData] = useState({});

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
  };

  useEffect(() => {
    getGiHubUserWithAxios();
  }, []);

  return (
    <div>
      <h5>Name : {userData.location ? userData.location.name : ""}</h5>
      <h5>Country :{userData.location ? userData.location.country : ""}</h5>
      <h5>Region :{userData.location ? userData.location.region : ""}</h5>
      <h5>Latitude :{userData.location ? userData.location.lat : ""}</h5>
      <h5>Longitude :{userData.location ? userData.location.lon : ""}</h5>
      <h5>
        Timezone :{userData.location ? userData.location.timezone_id : ""}
      </h5>
      <h5>Pressure :{userData.current ? userData.current.pressure : ""}</h5>
      <h5>
        Temperature :{userData.current ? userData.current.temperature : ""}
      </h5>
      <h5>Humidity :{userData.current ? userData.current.humidity : ""}</h5>
      <h5>Wind Speed :{userData.current ? userData.current.wind_speed : ""}</h5>
      <h5>
        Weather :{userData.current ? userData.current.weather_descriptions : ""}
      </h5>
    </div>
  );
}

export default Weather;
