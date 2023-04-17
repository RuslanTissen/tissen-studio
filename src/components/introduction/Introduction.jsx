import React from 'react'
import intr from "../../images/intr.jpg"
import "./Introduction.scss"

function Introduction() {
	return (
		<div className='introduction' id='introduction'>
			<div className="introduction__text--container">
				<h1>Welcome to <mark>Tissen</mark>  studio world.</h1>
				<p>An optimized website is the biggest lever for your online success today. It is the first and central point of contact for current and potential customers as well as for partners and future employees. The website is therefore decisive for the external image as well as the digital sales and turnover of your brand or your company.</p>
			</div>
			<div className="introduction__container">
				<div className="introduction__image">
					<img src={intr} alt="" />
				</div>
				<div className="introduction__text">
					<h1>Place where <mark>dreams</mark> come true</h1>
				</div>
			</div>
		</div>
	)
}

export default Introduction