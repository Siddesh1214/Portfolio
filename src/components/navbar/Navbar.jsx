import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

function Navbar() {
	return (
		<div className="navbar">
			<Sidebar></Sidebar>
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 0.5 }}
					teansition={{ duration: 0.5 }}
				>
					SIDDESH SHINDE
				</motion.span>
				<div className="social">
					<a
						title="Connect on LinkedIn"
						aria-label="Connect on LinkedIn"
						target="_blank"
						href="https://www.linkedin.com/in/siddesh-shinde-b2a4a8226/"
					>
						<FaLinkedin size={25} />
					</a>
					<a
						title="View Github"
						aria-label="View Github"
						target="_blank"
						href="https://github.com/Siddesh1214"
					>
						<FaGithub size={25} />
					</a>
					<a
						title="Follow me on Instagram"
						aria-label="Follow me on Instagram"
						target="_blank"
						href="https://www.instagram.com/siddesh_1214/"
					>
						<FaInstagram size={25} />
					</a>
					<a
						title="Send an Email"
						aria-label="Send an Email"
						target="_blank"
						href="mailto:siddeshshinde1214@gmail.com"
					>
						<IoMailOutline size={25} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
