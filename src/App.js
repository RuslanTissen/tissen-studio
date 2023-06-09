import './App.scss';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer';
import Introduction from './components/introduction/Introduction';
import Idea from './components/idea/idea';
import Templates from './components/templates/Templates';
import Plan from './components/plan/Plan';
// import wa from "./images/WhatsAppButtonGreenMedium.png"
// import { BsWhatsapp } from "react-icons/bs"

function App() {

	return (
		<div className="app">

			{/* <button onClick={(e) => setX("en")}>EN</button>
			<button onClick={(e) => setX("de")}>DE</button> */}


			<Header />

			<div className='app-container'>

				<Introduction />

				<Idea />

				<Templates />

				<Plan />

			</div>

			<Footer />
		</div>
	);
}

export default App;



{/* <div id={'alq'} >
				<MidSection
					image={photo2}
					title={"Nuestro lema:"}
					text={"Nuestro personal tiene muchos años de experiencia. Y seguimos mejorando tanto los métodos de limpieza como los medios para mejorar el servicio."}
				/>
			</div> */}