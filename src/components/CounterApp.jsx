import React from 'react'
import PropTypes from 'prop-types'

const handleIncrement = (e) => {
   console.log(e);
}


const CounterApp = ({value}) => {
   return <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={ handleIncrement }> +1 </button>
   </>
}

CounterApp.propTypes = {
   value : PropTypes.number,
}

export default CounterApp;

