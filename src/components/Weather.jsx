import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";
import bgImage from "../images/hava-durumu.jpg";

function App() {
  const key = "273e480d3d8703fe863355d930f5dfef";
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");

  // https://api.openweathermap.org/data/2.5/weather?q=london&appid=273e480d3d8703fe863355d930f5dfef&units=metric
  const getApi = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
      );
      // console.log(response);
      setCity(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (search.length > 2) {
      getApi();
    }

    console.log(search);
  }, [search]);

  // const handleClick = () => {
  //   // console.log(search);
  //   // console.log("click");
  //   getApi();
  // };

  return (
    <div className="App">
      <div className="bg-image">
        <img src="{bgImage}" alt="" />
      </div>
      <h1>HAVA DURUMUNU ÖĞRENMEK İSTERSEN😎</h1>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Şehir ara..."
        className="imput"
        type="text"
      />
      {/* <button onClick={handleClick}>search</button> */}
      {city && <City city={city} />}
    </div>
  );
}
export default App;
