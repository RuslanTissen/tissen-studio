import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import {IoMdLaptop} from "react-icons/io"

function Header() {
	const [show, setShow] = useState(false)

	return (
		<div className="nav">
			<ul className='ul-first'>
				<li className="logo"><AnchorLink href="#foto">TISSEN <IoMdLaptop/> STUDIO</AnchorLink></li>
				<li className="alq"><AnchorLink href="#philosophie">STRONG</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#exercise">RECOVERY</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#nutrition">NUTRITION</AnchorLink></li>
				<li className='personal'><AnchorLink href="#stretching">STRETCHING</AnchorLink></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="alq"><AnchorLink href="#philosophie">STRONG</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#exercise">DETALLES</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#nutrition">NUTRITION</AnchorLink></li>
				<li className="personal"><AnchorLink href="#stretching">STRETCHING</AnchorLink></li>
			</ul>}
		</div>
	)
}

export default Header