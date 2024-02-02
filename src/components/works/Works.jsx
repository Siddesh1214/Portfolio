import React from "react";
import "./works.scss";
import { motion } from "framer-motion";

function Works() {
	const arr = ["Web Design", "Development", "Product Design", "Social Media"];

	const textVariant1 = {
		intial: {
			x: -50,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration:1,
				staggerChildren:0.1,
			},
		},
	};

	const textVariant = {
		initial: {
			x: -50,
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
	return (
		<div className="cont">
			<div className="left">
				{arr.map((elem, i) => (
					<span>{elem}</span>
				))}
			</div>
			<div className="right">
				<motion.div
					className="second"
					variants={textVariant}
					initial="initial"
					whileInView="animate"
				>
					<motion.img variants={textVariant} src="./cpp.png" alt="" />
					<motion.img variants={textVariant} src="./javascript.png" alt="" />
					<motion.img variants={textVariant} src="./python.png" alt="" />
					<motion.img variants={textVariant} src="./html.png" alt="" />
					<motion.img variants={textVariant} src="./css.png" alt="" />
					<motion.img variants={textVariant} src="./sass.png" alt="" />
					<motion.img variants={textVariant} src="./Tailwind CSS.png" alt="" />
					<motion.img variants={textVariant} src="./react.png" alt="" />
					<motion.img variants={textVariant} src="./redux.png" alt="" />
					<motion.img variants={textVariant} src="./node.png" alt="" />
					<motion.img variants={textVariant} src="./mongodb-leaf.png" alt="" />
					<motion.img variants={textVariant} src="./git.png" alt="" />
				</motion.div>
			</div>
		</div>
	);
}

export default Works;
