import React from 'react'
import "./Idea.scss"
import img1 from "../../images/idea-1.jpg"
import img2 from "../../images/idea-2.jpg"
import img3 from "../../images/idea-3.jpg"
import img4 from "../../images/idea-4.jpg"
import img5 from "../../images/idea-5.jpg"

function Idea() {
	return (
		<div className='idea'>
			<div className="idea__text--container">
				<h1>Design and comfort.</h1>
				<p>Website design is one of the most valuable tools for user experience. A clear and strict navigation structure plus a harmonious design can greatly enhance the usability of your website.</p>
			</div>
			<div className="idea__images--container">
				<div className="box--img1 box-img">
					<div className="text__box--h1"><h1>You have an idea!</h1></div>
					<div className="text__box--p">
						<h3>Next steps</h3>
						<p>Lets start from idea to final project. There are 5 steps: first meeting, web designer work, coding process, second meeting and deploy after corrections. Here we are!</p>
					</div>
				</div>

				<div className="box--img2 box-img">
					<img src={img1} alt="" className="image1 image-idea" />
					<div className="box-img__box">
						<h3>First meeting</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi veritatis repellendus asperiores quisquam! Quibusdam nobis maxime, est at quam voluptate eum provident. Soluta quia optio placeat accusamus impedit fugit!						</p>
					</div>
				</div>

				<div className="box--img3 box-img">
					<img src={img2} alt="" className="image2 image-idea" />
					<div className="box-img__box">
						<h3>First meeting</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi veritatis repellendus asperiores quisquam! Quibusdam nobis maxime, est at quam voluptate eum provident. Soluta quia optio placeat accusamus impedit fugit!						</p>
					</div>
				</div>

				<div className="box--img4 box-img">
					<img src={img3} alt="" className="image3 image-idea" />
					<div className="box-img__box">
						<h3>First meeting</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi veritatis repellendus asperiores quisquam! Quibusdam nobis maxime, est at quam voluptate eum provident. Soluta quia optio placeat accusamus impedit fugit!						</p>
					</div>
				</div>

				<div className="box--img5 box-img">
					<img src={img4} alt="" className="image4 image-idea" />
					<div className="box-img__box">
						<h3>First meeting</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi veritatis repellendus asperiores quisquam! Quibusdam nobis maxime, est at quam voluptate eum provident. Soluta quia optio placeat accusamus impedit fugit!						</p>
					</div>
				</div>

				<div className="box--img6 box-img">
					<img src={img5} alt="" className="image5 image-idea" />
					<div className="box-img__box">
						<h3>First meeting</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi veritatis repellendus asperiores quisquam! Quibusdam nobis maxime, est at quam voluptate eum provident. Soluta quia optio placeat accusamus impedit fugit!						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Idea