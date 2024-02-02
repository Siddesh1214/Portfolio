import { motion } from "framer-motion";
import React from "react";

function Links() {
	const variants = {
		open: {
			transition: {
				staggerChildren: 0.1,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants = {
		open: {
			y: 0,
			opacity: 1,
		},
		closed: {
			y: 50,
			opacity: 0,
		},
	};
	const list = ["Homepage", "Services", "Portfolio", "Contact", "About"];

	return (
		<motion.div className="links" variants={variants}>
			{list.map((item, i) => (
				<motion.a
					href={`#${item}`}
					key={i}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					variants={itemVariants}
				>
					{item}
				</motion.a>
			))}
		</motion.div>
	);
}

export default Links;
