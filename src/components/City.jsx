import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div className="city">
      <h2>ŞEHİR ADI: {city.name.toUpperCase()}</h2>
      <h3>ÜLKE ADI:{city.sys.country}</h3>
      <h3>SICAKLIK:{city?.main.temp}°C</h3>
      <h3>EN YÜKSEK SICAKLIK:{city.main.temp_max}°C</h3>
      <h3>EN DÜŞÜK SICAKLIK:{city.main.temp_min}°C</h3>
      <h3>BASINÇ:{city.main.pressure}hPa</h3>
      <h3>NEM ORANI:{city.main.humidity}%</h3>
      <h3>BULUTLAR:{city.weather[0].main}</h3>
      <h3>GÖKYÜZÜ:{city.weather[0].description}</h3>
      <h3>RÜZGAR HIZI:{city.wind.speed}m/s SSE</h3>
      <h1>⛔ÖNLEMİNİZİ ALMAYI UNUTMAYINIZ...</h1>
    </div>
  );
};
export default City;
