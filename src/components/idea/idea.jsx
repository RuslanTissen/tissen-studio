import React, { useEffect } from 'react'
import "./Idea.scss"
import img1 from "../../images/idea-1.jpg"
import img2 from "../../images/idea-2.jpg"
import img3 from "../../images/idea-3.jpg"
import img4 from "../../images/idea-4.jpg"
import img5 from "../../images/idea-5.jpg"
import Button from '@mui/material/Button';
import trans from '../Trans.js'
import { useContext } from 'react';
import { Context } from '../Context';

function Idea(props) {
	const { lang, } = useContext(Context)

	return (
		<div className='idea' id='idea'>
			<div className="idea__text--container">
				<h1>{trans[lang].designComfort}</h1>
				<p>{trans[lang].design}</p>
			</div>
			<div className="idea__images--container">
				<div className="box--img1 box-img">
					<div className="text__box--h1"><h1>{trans[lang].idea}</h1></div>
					<div className="text__box--p">
						<h3>{trans[lang].stepsTitle}</h3>
						<p>{trans[lang].steps}</p>
					</div>
				</div>

				<div className="box--img2 box-img">
					<img src={img1} alt="" className="image1 image-idea" />
					<div className="box-img__box">
						<h3>{trans[lang].meetingTitle}</h3>
						<p>{trans[lang].meeting}</p>
					</div>
				</div>

				<div className="box--img3 box-img">
					<img src={img2} alt="" className="image2 image-idea" />
					<div className="box-img__box">
						<h3>{trans[lang].designTitle}</h3>
						<p>{trans[lang].design}</p>
					</div>
				</div>

				<div className="box--img4 box-img">
					<img src={img3} alt="" className="image3 image-idea" />
					<div className="box-img__box">
						<h3>{trans[lang].codingTitle}</h3>
						<p>{trans[lang].coding}</p>
					</div>
				</div>

				<div className="box--img5 box-img">
					<img src={img4} alt="" className="image4 image-idea" />
					<div className="box-img__box">
						<h3>{trans[lang].secondMeetingTitle}</h3>
						<p>{trans[lang].secondMeeting}</p>
					</div>
				</div>

				<div className="box--img6 box-img">
					<img src={img5} alt="" className="image5 image-idea" />
					<div className="box-img__box">
						<h3>{trans[lang].deployTitle}</h3>
						<p>{trans[lang].deploy}</p>
						<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="primary">{trans[lang].contact}</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Idea