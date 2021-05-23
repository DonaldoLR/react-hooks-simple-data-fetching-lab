// create your App component here
import { useEffect, useState } from "react";
const App = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const [dogImg, setdogImg] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setisLoaded(true);
        setdogImg(data.message);
      });
  }, []);

  return (
    <div>
      {isLoaded ? (
        <img src={dogImg} alt="A Random Dog"></img>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
