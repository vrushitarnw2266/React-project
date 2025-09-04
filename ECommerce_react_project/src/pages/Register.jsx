import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Images from "../Images/download.jpg"; // default profile pic
// import { Eye, EyeOff } from "lucide-react"; // for show/hide password icons

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(Images); // profile preview
  const [showPassword, setShowPassword] = useState(false); // toggle password

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle profile picture upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Password strength checker
  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (/[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password))
      return "Strong";
    return "Medium";
  };

  // Form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError("⚠️ Please fill out all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("⚠️ Passwords do not match.");
      return;
    }

    setError("");
    navigate("/login", { replace: true });
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
    <div className="flex items-center justify-center min-h-screen transition-colors duration-300 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
          📝 Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <label htmlFor="profilepic" className="cursor-pointer">
              <img
                className="border-4 border-gray-400 shadow-lg rounded-full w-32 h-32 object-cover hover:border-green-500 transition"
                src={preview}
                alt="Profile Preview"
              />
            </label>
            <input type="file" id="profilepic" className="hidden" onChange={handleImageChange} />
          </div>

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="w-full border p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
              text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500"
            autoComplete="off"
            value={form.username}
            onChange={handleChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
              text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500"
            autoComplete="off"
            value={form.email}
            onChange={handleChange}
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              className="w-full border p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500"
              autoComplete="off"
              value={form.password}
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-gray-300"
            >
              {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
            </span>
          </div>

          {/* Password Strength */}
          {form.password && (
            <p
              className={`text-sm ${
                getPasswordStrength(form.password) === "Weak"
                  ? "text-red-500"
                  : getPasswordStrength(form.password) === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              Strength: {getPasswordStrength(form.password)}
            </p>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
              text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500"
            autoComplete="off"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg font-semibold
              hover:bg-green-600 dark:hover:bg-green-700 transition"
          >
            Register
          </button>

          {/* Already Registered */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 dark:text-green-400 font-semibold cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

















// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
//  import  Images from "../Images/download.jpg";
// export default function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!form.username || !form.email || !form.password || !form.confirmPassword) {
//       setError("⚠️ Please fill out all fields.");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError("⚠️ Passwords do not match.");
//       return;
//     }

//     setError("");
//     navigate("/login", { replace: true });
//   };

//   return (

//     <>
//     {/* <div
//      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
//       style={{
//         backgroundImage: "url('https://png.pngtree.com/background/20250111/original/pngtree-shades-of-blue-a-dark-blue-light-background-for-design-picture-image_13289702.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     > */}

    
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
//           📝 Register
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div className="profile inline-block">
//             <label htmlFor="profilepic">
//               <img className="border-4 border-gray-500 min-w-full shadow-lg cursor-pointer  rounded-full mb-9   w-[145px] hover:border-gray-200" src={Images} alt="" />
//             </label>
//             <input type="file" id="profilepic" className="hidden" />
//          </div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Enter Username"
//             className="border p-2 rounded bg-gray-50 dark:bg-gray-700 
//               text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
//             autoComplete="off"
//             value={form.username}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             className="border p-2 rounded bg-gray-50 dark:bg-gray-700 
//               text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
//             autoComplete="off"
//             value={form.email}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             className="border p-2 rounded bg-gray-50 dark:bg-gray-700 
//               text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
//             autoComplete="off"
//             value={form.password}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             className="border p-2 rounded bg-gray-50 dark:bg-gray-700 
//               text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
//             autoComplete="off"
//             value={form.confirmPassword}
//             onChange={handleChange}
//           />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold
//               hover:bg-green-600 dark:hover:bg-green-700 transition"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//     {/* </div> */}
//     </>
//   );
// }















// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   //  Form submission handler
//   // Validates input fields and checks if passwords match
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     //  Empty field validation
//     if (!form.username || !form.email || !form.password || !form.confirmPassword) {
//       setError("⚠️ Please fill out all fields.");
//       return;
//     }

//     //  Passwords match validation
//     if (form.password !== form.confirmPassword) {
//       setError("⚠️ Passwords do not match.");
//       return;
//     }

//     //  Passed all checks
//     setError("");
//     // (Optional: Call API here)
//     navigate("/login", { replace: true });
//   };

//   return (
//     <div className="container mx-auto text-center">
//       <h1 className="text-2xl font-bold mb-4">📝 Register</h1>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
//         <input
//           type="text"
//           name="username"
//           placeholder="Enter Username"
//           className="border p-2 rounded"
//           autoComplete="off"
//           value={form.username}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           className="border p-2 rounded"
//              autoComplete="off"
//           value={form.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           className="border p-2 rounded"
//              autoComplete="off"
//           value={form.password}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//              autoComplete="off"
//           className="border p-2 rounded"
//           value={form.confirmPassword}
//           onChange={handleChange}
//         />

//         {/* Show error if any */}
//         {error && <p className="text-red-500">{error}</p>}

//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }



// // import { useNavigate } from "react-router-dom";

// // export default function Register() {
// //   const navigate = useNavigate();

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     //  Do validation / API call here if needed
// //     navigate("/login", { replace: true }); // after register → go home
// //   };

// //   return (
// //     <div className="container mx-auto text-center">
// //       <h1 className="text-2xl font-bold mb-4">📝 Register</h1>
      
// //       <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
// //         <input type="text" autoComplete="off" placeholder="Enter Username" className="border p-2 rounded" />
// //         <input type="email" autoComplete="off" placeholder="Enter Email" className="border p-2 rounded" />
// //         <input type="password" placeholder="Enter Password " className="border p-2 rounded" />
// //         <input type="password" placeholder="Confirm Password" className="border p-2 rounded" />
        
// //         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
// //           Register
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
