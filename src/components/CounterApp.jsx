import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {
   //Hook init
   const [counter, setCounter] = useState(value);

   const handleIncrement = () => {
      setCounter(counter + 1);
   }

   const handleDecrement = () => {
      setCounter(counter - 1);
   }

   const handleReset = () => {
      setCounter(value);
   }

   return <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}> +1 </button>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handleDecrement}> -1 </button>
   </>
}

CounterApp.propTypes = {
   value: PropTypes.number,
}

export default CounterApp;

