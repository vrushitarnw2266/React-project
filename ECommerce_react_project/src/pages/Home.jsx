import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🏠 Home Page</h1>
      
      {/* Go to Register page */}
      <Link 
        to="/register" 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go to Register
      </Link>
    </div>
  );
}
