import React from 'react'
import "../css/header.css"

const Header = ({ setQuery, setSelectedMeal, MealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (


    <div className='ana-div'>

      <div className='yazı'>
        <h1 >Recipe</h1>
      </div>

      <form action="" className='form' onSubmit={handleSubmit}>
        <input type="text" className='input' placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
        <button className='button' type='Submit' >Search</button>
        <select  name="Meal" id="Meal" onChange={(e) => setSelectedMeal(e.target.value)}>
          {MealType.map((meal, index) => {
            return (<option key={index} value={meal}>{meal?.toUpperCase()}</option>)

          })}
        </select>
      </form>

    </div>
  )
}

export default Header
