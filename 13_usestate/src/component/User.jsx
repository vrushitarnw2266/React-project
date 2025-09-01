import React from 'react';
import { useState } from 'react';

// export default function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1 className='text-2xl mt-3 p-3'>My favorite color is {color}!</h1>
//       <button
//       className='mt-5  gap-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//       className='mt-5 gap-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//       className='mt-5  gap-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//       className='mt-5  gap-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//   </>
//   );
// }


export default function User() {

  const handleOnClick = () => {
    let newText = name.toUpperCase();
    setName(newText);
  }
  const handleClearClick = () => {
    let newText = "";
    if (name > 0) {
      newText = "";
    }
    setName(newText);
  }
  const handleOnChange = (event) => {
    setName(event.target.value);
  }

  const handleLoClick = () => {
    let newText = name.toLowerCase();
    setName(newText);
  }
  const [name, setName] = useState("");
  return (

    <>
      <div className="container">
        <textarea rows="10" column="" className="p-2 text-sm ml-6 mt-5 justify-center rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Text" onChange={handleOnChange} value={name}></textarea>
        
     <button type="button" class="p-2 ml-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleOnClick}>Convert to UpperCase</button>
     <button type="button" class="p-2 ml-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleLoClick}>Convert to Lowercase</button>
     <button type="button" class="p-2 ml-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleClearClick}>Clear Text</button>
       
      </div>

      <div className="container my-3 mt-5 ml-5">
        <h1 className='text-3xl '>Your Text Summary</h1>
        <p>{name.split(" ").length} words and {name.length} characters</p>
        <p>{0.008 * name.split(" ").length}Minutes Read</p>
        <h2 className='text-2xl mt-3'>Preview</h2>
        <p>{name}</p>
      </div>

    </>
  )
}

