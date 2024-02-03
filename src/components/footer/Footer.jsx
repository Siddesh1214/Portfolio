import React, { useEffect, useState } from "react";
import "./footer.scss";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
	const [wid, setWid] = useState(null);
	useEffect(() => {

		console.log("first", window.innerWidth);
		setWid(window.innerWidth);
		
	});
	console.log("WID IS", wid);
	return(
		<div className="foot">
			<span className="first">Find me on</span>
			<div className="social">
				<a
					title="Connect on LinkedIn"
					aria-label="Connect on LinkedIn"
					target="_blank"
					href="https://www.linkedin.com/in/siddesh-shinde-b2a4a8226/"
				>
					<FaLinkedin size={`${wid<1000  ? 25 : 40}`} color="#fff"/>
				</a>
				<a
					title="View Github"
					aria-label="View Github"
					target="_blank"
					href="https://github.com/Siddesh1214"
				>
					<FaGithub size={`${wid<1000  ? 25 : 40}`} />
				</a>
				<a
					title="Follow me on Instagram"
					aria-label="Follow me on Instagram"
					target="_blank"
					href="https://www.instagram.com/siddesh_1214/"
				>
					<FaInstagram size={`${wid<1000  ? 25 : 40}`} />
				</a>
				<a
					title="Send an Email"
					aria-label="Send an Email"
					target="_blank"
					href="mailto:siddeshshinde1214@gmail.com"
				>
					<IoMailOutline size={`${wid<1000  ? 25 : 40}`} />
				</a>
			</div>
			<span className="second"> feel free to connect </span>
			<div className="third">Developed by Siddesh Shinde</div>
			<span>@2024</span>
		</div>
	);
}

export default Footer;
