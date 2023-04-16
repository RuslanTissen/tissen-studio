import "./Templates.scss"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import temp1 from "../../images/crsl1.jpg"
import temp2 from "../../images/crsl2.jpg"
import temp3 from "../../images/crsl3.jpg"
import temp4 from "../../images/crsl4.jpg"
import temp5 from "../../images/crsl5.jpg"
import temp6 from "../../images/crsl6.jpg"
import temp7 from "../../images/crsl7.jpg"
import temp8 from "../../images/crsl8.jpg"
import temp9 from "../../images/crsl9.jpg"

function Templates() {
	return (
		<div className='templates'>
			<div className="templates__text--box">
				<h1>Choose your style.</h1>
				<p>If standard model is not for you, we help you to find your unique style. Look on this carousel.</p>
			</div>

			<div className="templates__carousel--box">
				<Carousel>
					<div>
						<img src={temp1} />
						{/* <p className="hotel"></p> */}
					</div>
					<div>
                    <img src={temp2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={temp3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
					 <div>
                    <img src={temp4} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
					 <div>
                    <img src={temp5} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
					 <div>
                    <img src={temp6} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
					 <div>
                    <img src={temp7} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
					 <div>
                    <img src={temp8} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
					 <div>
                    <img src={temp9} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
				</Carousel>
			</div>

		</div>
	)
}

export default Templates