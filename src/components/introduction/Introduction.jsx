import React from 'react'
import intr from "../../images/intr.jpg"
import "./Introduction.scss"

function Introduction() {
  return (
	 <div className='introduction'>
		<div className="introduction__image">
			<img src={intr} alt="" />
			<h1>Welcome to Tissen studio world.</h1>
		</div>
		{/* <div className="introduction__text">
		</div> */}

	 </div>
  )
}

export default Introduction