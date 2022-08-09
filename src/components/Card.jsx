import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/card.css"

const Card = ({ recipes }) => {
    const navigate = useNavigate()
    return (
        <div>
            {recipes.map(({ recipe }, index) => {
                return (


                    <div className="container  text-center mt-4 ">


                        <div className="row ">
                            <div className='col'>
                                <img className="card-img-top w-25 mt-5 rounded-circle" src={recipe.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.label}</h5>
                                    <p className="card-text">{recipe.source}</p>
                                    <button className='btn btn-info mb-4' onClick={()=>navigate("/detail", {state : recipe})}>Wiew More</button>
                                </div>
                            </div>

                        </div>




                    </div>

                )
            })}



        </div>
    )
}

export default Card
