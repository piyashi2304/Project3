import React,{useState} from 'react'

function Converter() {

    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState("")

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit(value !== '' ? (value * 9/5 + 32).toFixed(2) : '');
      };
    
      const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(value !== '' ? ((value - 32) * 5/9).toFixed(2) : '');
      };



  return (
    <>
   
<div className='converter'>
<h1>Temperature Converter</h1>
      <div >
      
        <label>
          Celsius:
          <input type="number" value={celsius} onChange={handleCelsiusChange} />
        </label>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
        </label>
      </div> 
      </div> 


    
    </>
  )
}

export default Converter