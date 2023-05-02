import React, { useState } from 'react'
import Button from '@mui/material/Button';
import "./Introduction.scss"
import { Context } from '../Context.js';
import { useContext } from 'react';
import trans from "../Trans.js"

//  ----------------- work with DOM  17.1.2022 -----------

// const intr = document.querySelector("#introduction")

// const array = Array.from(intr.children)
// for (let i = 0; i < array.length; i++) {
// 	const element = array[i];
// 	console.log(element.children.length, element.childElementCount);
// }


// const getMostClasses = (parent) => {
// 	const array = parent.children
// 	let mostClassesSeen = 0;
// 	let mostClassesElement = null;
// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		if (element.classList.length > mostClassesSeen) {
// 			mostClassesSeen = element.classList.length
// 			mostClassesElement = element
// 		}
// 	}
// 	return{
// 		mostClassesSeen,
// 		mostClassesElement
// 	}
// }
// console.log("MOst classes:", getMostClasses(intr))

//  ------------ add event listner --------------



function Introduction() {
	const { lang, } = useContext(Context)
	// ------ togle color ------
	// const [active, setActive] = useState(true)
	// function myFunction() {
	// 	setActive(!active)
	// }

	return (
		<div
			className='introduction'
			id='introduction'
		// onClick={myFunction}
		>
			<div className="introduction__text1">
				<h1
					className='h1-test'
					// style={{ color: !active ? "black" : "white" }}
				>
					Tissen web studio
				</h1>

				<p>{trans[lang].melody}</p>

			</div>

			<div className="introduction__text2">
				<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="primary">{trans[lang].contact}</Button>

				{/* <select className='sprache' value={lang} onChange={(e) => setLang(e.target.value)}>
					<option className='es' value="es">🇦🇷</option>
					<option className='en' value="en">🇬🇧</option>
					<div className='de' value="de">🇩🇪</div> 
				</select> */}

			</div>
		</div>
	)
}

export default Introduction
