import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
	{
		id: 1,
		title: "React Commerce",
		image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error etnihil, reiciendis nesciunt possimus consectetur dolorem voluptas praesentium esse amet omnis blanditiis repellat sed necessitatibus sunt! Error, sapiente facere!",
	},
	{
		id: 2,
		title: "Next Commerce",
		image:
			"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error etnihil, reiciendis nesciunt possimus consectetur dolorem voluptas praesentium esse amet omnis blanditiis repellat sed necessitatibus sunt! Error, sapiente facere!",
	},
	{
		id: 3,
		title: "Vanila Science",
		image:
			"https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error etnihil, reiciendis nesciunt possimus consectetur dolorem voluptas praesentium esse amet omnis blanditiis repellat sed necessitatibus sunt! Error, sapiente facere!",
	},
	{
		id: 4,
		title: "Tailwind Youtube",
		image:
			"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error etnihil, reiciendis nesciunt possimus consectetur dolorem voluptas praesentium esse amet omnis blanditiis repellat sed necessitatibus sunt! Error, sapiente facere!",
	},
];

const Single = ({ item }) => {
	const ref1 = useRef();
	const { scrollYProgress } = useScroll({
		target: ref1,
		// offset:['start start','end start']
	});
	console.log("ITEM", item);

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
			}
		},
	}

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
	return (
		<section>
			<div className="containerPort">
				<div className="wrapper">
					<div className="imgContainer" ref={ref1}>
						<img src={item.image} alt="" />
					</div>
					<motion.div className="textContainer" style={{y}} >
						<h2>{item.title}</h2>
						<p>{item.desc}</p>

						<div>
							<button>See Demo</button>
							<button>See Code</button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

function Portfolio() {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});
	return (
		<div className="portfolio" ref={ref}>
			<div className="progress" >
				<h1>Featured Works</h1>
				<motion.div
					style={{ scaleX: scaleX }}
					className="progressBar"
				></motion.div>
			</div>
			{items.map((item) => (
				<Single key={item.id} item={item} />
			))}
		</div>
	);
}

export default Portfolio;
