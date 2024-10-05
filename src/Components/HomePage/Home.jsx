import React, { useState } from 'react';

function generateSeries(n) {
  if (n % 2 === 0) {
    return (n ** 2) / 4;
  } else {
    return (((n ** 2) - 1) / 4) + 0.25;
  }
}

function Home() {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState([]); 

  const handleInputChange = (e) => {
    setInput(e.target.value);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = parseInt(input, 10); 
    if (isNaN(price)) {
      alert("Please enter a valid number");
      return;
    }
    const n = Math.floor(Math.sqrt(price * 4));
    const closestNumber = generateSeries(n);
    const generatedResult = [];
    for (let i = -3; i < 3; i++) {
      generatedResult.push(generateSeries(n + i));
    }
    setResult(generatedResult);
    setInput("");
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter your number</label>
          <input
            type="text"
            className='border-2'
            value={input}
            onChange={handleInputChange}
          />
          <button
            type='submit'
            className='bg-slate-300 p-1'
          >
            Get result
          </button>
        </form>

        {result.length > 0 && (
          <div>
            <h3>Generated Series:</h3>
            <ul>
              {result.map((num, index) => (
                <li key={index}>{num}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Home;
