
import { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  function fetchDog() {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div>
      <h1>Random Dog Generator</h1>

      <button onClick={fetchDog}>
        Get New Dog
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="Random Dog" />
      )}
    </div>
  );
}

export default App;
