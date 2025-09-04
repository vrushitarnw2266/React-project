import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // After login, go to sendotp page and pass email if needed
    navigate("/sendotp", { state: { email: formData.email } });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20250111/original/pngtree-shades-of-blue-a-dark-blue-light-background-for-design-picture-image_13289702.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-400
                bg-gray-50 dark:bg-gray-700 
                text-gray-800 dark:text-gray-100 
                border-gray-300 dark:border-gray-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-400
                bg-gray-50 dark:bg-gray-700 
                text-gray-800 dark:text-gray-100 
                border-gray-300 dark:border-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold 
              hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          {/* Extra Links */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form submitted:", formData);

//     // ✅ after login, go to OTP page
//     navigate("/send-otp", { state: { email: formData.email } });
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-gray-100"
//       style={{
//         backgroundImage:
//           "url('https://png.pngtree.com/background/20250111/original/pngtree-shades-of-blue-a-dark-blue-light-background-for-design-picture-image_13289702.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Login to Your Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-xl"
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border rounded-xl"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
