import React from "react";
import "./hero.scss";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
	const textVariant = {
		initial: {
			x: -500,
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
		scrollButton: {
			opacity: 0,
			y: 10,
			transition: {
				duration: 2,
				repeat: Infinity,
			},
		},
	};
	const SliderText = {
		initial: {
			x: 0,
		},
		animate: {
			x: "-280%",
			transition: {
				duration: 20,
				repeat: Infinity,
				repeatType: "mirror",
			},
		},
	};

	const imgAnim = {
		initial: {
			x: -10,
			y: -10,
		},
		animate: {
			x: 10,
			y: 10,
			transition: {
				duration: 3,
				repeat: Infinity,
				repeatType: "mirror",
			},
		},
	};
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariant}
					initial="initial"
					animate="animate"
				>
					<div className="top-text">
						<motion.h1
							variants={textVariant}
							initial="initial"
							animate="animate"
						>
							Hi There! <span className="wave">👋🏻</span>
						</motion.h1>

						<motion.h1 variants={textVariant}>I'M Siddesh Shinde</motion.h1>
					</div>
					<motion.div className="bottom-text" variants={textVariant}>
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed once, initially
								"A Passionate Web Developer",
								1000,
								"A Passionate Mern Developer",
								1000,
								"A Passionate FullStack Developer",
								1000,
								"A Passionate Frontend Developer",
								1000,
								"A Passionate Backend Developer",
								1000,
							]}
							speed={50}
							style={{ fontSize: "2em" }}
							repeat={Infinity}
						/>
					</motion.div>
					<motion.div className="buttons" variants={textVariant}>
						<motion.a variants={textVariant} href="#Portfolio">
							See latest Works
						</motion.a>
						<motion.a variants={textVariant} href="#Contact">
							Contact Me
						</motion.a>
					</motion.div>
					<motion.img
						variants={textVariant}
						animate="scrollButton"
						src="/scroll.png"
						alt=""
					/>
				</motion.div>
			</div>
			<motion.div
				className="sliding-text-cont"
				variants={SliderText}
				initial="initial"
				animate="animate"
			>
				Programmer Developer Cricket Design Develop
			</motion.div>
			{/* < motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        className="imgContainer">
				<motion.img  src="/hero.png" alt="" />
			</motion.div> */}

			<motion.div
				variants={imgAnim}
				initial="initial"
				animate="animate"
				className="newImgCont"
			>
				{/* <img className="newImg"  src="/hero.png"  alt=""  /> */}
				<motion.img
					variants={imgAnim}
					className="newImg"
					src="/header-img.svg"
					alt=""
				/>
			</motion.div>
		</div>
	);
}

export default Hero;
