import React from 'react'
import Button from '@mui/material/Button';
import "./Introduction.scss"

function Introduction() {
	return (
		<div className='introduction' id='introduction'>
			<div className="introduction__text1">
				<h1>Tissen web studio</h1>
				{/* <p>An optimized website is the biggest lever for your online success today. It is the first and central point of contact for current and potential customers as well as for partners and future employees. The website is therefore decisive for the external image as well as the digital sales and turnover of your brand or your company.</p> */}
				<p>Place where dreams come true</p>
			</div>
			<div className="introduction__text2">
				<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="primary">Contact</Button>
			</div>
		</div>
	)
}

export default Introduction