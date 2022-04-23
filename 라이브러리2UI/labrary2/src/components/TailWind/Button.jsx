import React, { useState } from 'react'
import "./button.css"

export default function Button() {
  const [isGreen , setIsGreen] = useState(true)

return (
<>
  <button
    className={`py-2 px-4 bg-blue-500 text-blue font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`} onClick={() => setIsGreen(prev => !prev)}>
    Save changes
  </button>
  <button
    class={`py-2 px-4 bg-${isGreen ? "green" : "blue"}-500 text-white font-semibold rounded-lg shadow-md hover:bg-${isGreen ? "green" : "blue"}-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75`}>
    Save changes
  </button>
  <button
    class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Save changes
  </button>
  <button
    class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Save changes
  </button>
  <button
    class="btn-blue">
    Save changes
  </button>
</>
)
}