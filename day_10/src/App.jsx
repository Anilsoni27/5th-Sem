import React, { useState } from 'react'

function App() {

  const [degree, setDegree] = useState(0)

  return (
    <div>
      <img
        alt="img here"
        style={{
          height: "300px",
          width: "300px",
          transform: `rotate(${degree}deg)`
        }}
        src="https://static.vecteezy.com/system/resources/thumbnails/022/056/236/small_2x/abstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-photo.jpeg"
      />

      <br />

      <button onClick={() => setDegree(degree - 90)}>Left</button>

      <button onClick={() => setDegree(degree + 90)}>Right</button>
    </div>
  )
}

export default App