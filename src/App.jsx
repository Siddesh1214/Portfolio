import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Cursor from "./components/coursor/Cursor";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div>
			<Cursor></Cursor>

			<section id="Homepage">
				<Navbar></Navbar>
				<Hero></Hero>
			</section>
			<section>
				<Parallax type={"services"}></Parallax>
			</section>
			<section id="About">
				<About></About>
			</section>
			<section id="Services">
				<Works></Works>
			</section>
			<section>
				<Parallax type={"jobs"}></Parallax>
			</section>
			<Portfolio id="Portfolio"></Portfolio>
			<section id="Contact">
				<Contact />
			</section>
			<section className="footer">
				<Footer />
			</section>

			
		</div>
	);
}

export default App;
