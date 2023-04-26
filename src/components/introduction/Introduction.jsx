import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import "./Introduction.scss"
import { Context } from '../Context.js';
import { useContext } from 'react';
import trans from "../Trans.js"

function Introduction(props) {
	const [lang, setLang] = useState("es")
	// console.log(lang)

	// function setDefaults(e){
	// 	e.preventDefaults()
	// 	localStorage.setItem("lang",JSON.stringify(lang))
	// }

	useEffect(()=> {localStorage.setItem("lang", JSON.stringify(lang))})  

	return (
		<div className='introduction' id='introduction'>
			<div className="introduction__text1">
				<h1>Tissen web studio</h1>
				{/* <p>An optimized website is the biggest lever for your online success today. It is the first and central point of contact for current and potential customers as well as for partners and future employees. The website is therefore decisive for the external image as well as the digital sales and turnover of your brand or your company.</p> */}
				{/* <p>Place where dreams come true</p> */}
				{/* <p>Melody of code</p> */}
				<p>{trans[lang].melody}</p>

			</div>

			<div className="introduction__text2">
				<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="primary">Contact</Button>
				<select className='sprache' value={lang} onChange={(e) => setLang(e.target.value)}>
					<option className='es' value="es">🇦🇷</option>
					<option className='en' value="en">🇬🇧</option>
					{/* <div className='de' value="de">🇩🇪</div> */}
				</select>
			</div>
		</div>
	)
}

export default Introduction