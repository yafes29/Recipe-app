import React from 'react'
import {useLocation} from "react-router-dom"
import "../css/detail.css"

const Detail = () => {
  const {state} = useLocation();
  console.log(state)
  return (
    <div className='detail-container'>
      <div className='detail'>
      <h4>NUTRIENTS</h4>
          <p>
            {state.totalNutrients.CA.label} :{' '}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{' '}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{' '}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{' '}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <img src={state.image} alt="img" className='img' />
          </div>
        
          {/* {state.ingredientLines.map((line,index)=>(
            <div className='calori'>
              <p>{index + 1} - {line}</p>
            </div>
          ))} */}
           
          
    </div>
  )
}

export default Detail