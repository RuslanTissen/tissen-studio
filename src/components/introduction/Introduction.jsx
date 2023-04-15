import React from 'react'
import intr from "../../images/intr.jpg"
import "./Introduction.scss"

function Introduction() {
	return (
		<div className='introduction'>
			<h1>Welcome to <mark>Tissen</mark>  studio world</h1>
			<div className="introduction__container">
				<div className="introduction__image">
					<img src={intr} alt="" />
				</div>
				<div className="introduction__text">
					<h1>place where <mark>Dreams</mark> Come True</h1>
				</div>
			</div>
		</div>
	)
}

export default Introduction