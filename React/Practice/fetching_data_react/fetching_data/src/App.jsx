import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>

          <img
            className="slika"
            src={data.hdurl}
            alt="opis_u_slucaju_da_slika_nije_ucitana"
          />
        </div>
      )}
      {data && <p>{data.explanation}</p>}
    </>
  );
}

export default App;
