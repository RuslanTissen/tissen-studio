import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { IoMdLaptop } from "react-icons/io"
import { Context } from '../Context.js';
import { useContext } from 'react';
import trans from "../Trans.js"

function Header() {
	const [show, setShow] = useState(false)
	const { lang, setLang } = useContext(Context)

	return (
		<div className="nav">
			<div className="nav-container">
				<ul className='ul-first'>
					<li className="logo"><AnchorLink href="#introduction">TISSEN <IoMdLaptop /> STUDIO</AnchorLink></li>
					<li className="alq"><AnchorLink href="#idea">{trans[lang].process}</AnchorLink> </li>
					<li className="detalles"><AnchorLink href="#templates">{trans[lang].model}</AnchorLink></li>
					<li className="contacto"><AnchorLink href="#plan">{trans[lang].pricing}</AnchorLink></li>
					<li className='sprachen'>
						<button className="button-esp" value="es" onClick={(e)=>setLang(e.target.value)}>ESP</button>
						<p>/</p>
						<button className="button-eng" value="en" onClick={(e)=>setLang(e.target.value)}> ENG</button>
						{/* <button className="button-ger" value="gr" onClick={(e)=>setLang(e.target.value)}>GER</button> */}
					</li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="alq"><AnchorLink href="#idea">{trans[lang].process}</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#templates">{trans[lang].model}</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#plan">{trans[lang].pricing}</AnchorLink></li>
				{/* <li className="personal"><AnchorLink href="#stretching">STRETCHING</AnchorLink></li> */}
			</ul>}
		</div>
		</div >
	)
}

export default Header