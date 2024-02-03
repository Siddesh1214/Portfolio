import React from "react";
import "./about.scss";
import { easeIn, motion } from "framer-motion";

function About() {
	const corner1 = {
		initial: {
			x: -50,
			y: -50,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				duration: 2,
			},
		},
	};
	const corner2 = {
		initial: {
			x: 50,
			y: 50,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: -10,
			opacity: 1,
			transition: {
				duration: 2,
			},
		},
	};

	const imgAnima = {
		initial: {
			x: -50,
			y: -50,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: "linear",
			},
		},
	};

	const textArea = {
		initial: {
			x: -150,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
	};

	const showResume = () => {
		const url = "/Siddesh_Resume.pdf";
		window.open(url, "_blank");
	};
	return (
		<div className="container">
			<div className="wrapper">
				<div className="left">
					<motion.div
						variants={imgAnima}
						initial="initial"
						whileInView="animate"
					>
						<motion.img variants={imgAnima} src="/myimg.jpg" alt="" />
					</motion.div>
					<motion.button
						variants={imgAnima}
						initial={{ x: -500, opacity: 0 }}
						whileInView="animate"
						onClick={showResume}
					>
						Downlod Cv
					</motion.button>
				</div>
				<motion.div
					className="right"
					variants={textArea}
					initial="initial"
					whileInView="animate"
				>
					
					<motion.p variants={textArea} initial="initial" whileInView="animate">
						Hey there! I'm Siddesh, a budding Computer Science Engineering
						student specializing in Data Science at DJ. Sanghvi College of
						Engineering, Mumbai. Currently on the lookout for a thrilling
						opportunity as a Web Development Intern.
					</motion.p>
					<motion.p variants={textArea} initial="initial" whileInView="animate">
						Passionate about web development, I thrive on the dynamic nature of
						this ever-evolving field. I'm not just a spectator; I'm in the game
						to contribute innovative solutions and craft user experiences that
						leave a lasting impact. My journey is fueled by a relentless
						commitment to continuous learning, and my goal is to leverage
						technology for meaningful change.
					</motion.p>
					<motion.p variants={textArea} initial="initial" whileInView="animate">
						As a developer, I wield the power of React.js and Node.js to bring
						ideas to life. Let's turn visions into reality—connect with me and
						let the coding adventure begin!
					</motion.p>

					<motion.span initial="initial" whileInView="animate">
						
						<motion.div
							className="go1"
							variants={corner1}
							initial="initial"
							whileInView="animate"
						></motion.div>
						<motion.div
							className="go2"
							variants={corner2}
							initial="initial"
							whileInView="animate"
						></motion.div>
					</motion.span>
				</motion.div>
			</div>
		</div>
	);
}

export default About;
