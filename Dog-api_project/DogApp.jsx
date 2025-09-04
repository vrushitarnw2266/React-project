import { useEffect, useState } from "react";

export default function DogApp() {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch a random dog image
  const fetchDog = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDog(data.message);
    } catch (err) {
      console.error("Error fetching dog:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load once on component mount
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🐶 Random Dog Generator</h1>

      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : (
        <>
          <img
            src={dog}
            alt="A random dog"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg mb-4"
          />
          <button
            onClick={fetchDog}
            className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-600"
          >
            Show Another Dog 🐾
          </button>
        </>
      )}
    </div>
  );
}
