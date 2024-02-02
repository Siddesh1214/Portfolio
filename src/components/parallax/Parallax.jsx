import React, { useRef } from "react";
import "./parallax.scss";
import { motion,useScroll, useTransform } from "framer-motion";



function Parallax({ type }) {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });


  // const yBg = useTransform(scrollProgress, [0, 1], ['0%', '500%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	return (
		<div
      className="parallax"
      ref={ref}
			style={{
				background:
					type === "services"
						? "linear-gradient(180deg,#111132, #0c0c1d)"
						: "linear-gradient(180deg,#111132, #505064)",
			}}
			// style={{
			// 	background:
			// 		type === "services"
			// 			? "linear-gradient(180deg,#32f824, #ff0000)"
			// 			: "linear-gradient(180deg,#fe89f3, #e7ff4d)",
			// }}
    >
      <motion.h1 className="main-text" style={{y:yText}}>{type==='services'?'About Me':'What i Did' }</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{
        y: yBg,
        backgroundImage:`url(${type==='services'?'/planets.png':'sun.png'})`
      }}
        
      >
        
      </motion.div>
      <div className="sun"></div>
      <motion.div className="stars" style={{x:yBg}}></motion.div>
    </div>
	);
}

export default Parallax;
