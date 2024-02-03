import React, { useEffect } from "react";
import * as THREE from "three";
import "./comp.scss";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function Comp() {
	const bgc = "-webkit-linear-gradient(top, #11e8bb 0%, #8200c9 100%)";
	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		// scene.background=new THREE.Color(0xFFFFFF)
		// scene.background = new THREE.Color('red')
		// scene.background = new THREE.Color(0x0c0c1d)
		// scene.background = new THREE.Color('bgc');

		// const texture = new THREE.TextureLoader().load('/photo.avif')
		const texture = new THREE.TextureLoader();

		// scene.background = new THREE.Color(linear-gradient(180deg, #0c0c1d, #111132))

		// scene.backgroundBlurriness(1);

		const canvas = document.querySelector(".compCanvas");
		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

		const geometry = new THREE.BoxGeometry(3, 3, 3);
		// const geometry = new THREE.SphereGeometry(2, 40,32);
		// const material = new THREE.MeshBasicMaterial({ map: texture.load('https://threejs.org/examples/textures/crate.gif') });
		const material = [
			new THREE.MeshBasicMaterial({ map: texture.load("/photo1.png") }),
			new THREE.MeshBasicMaterial({ map: texture.load("/photo1.png") }),
			new THREE.MeshBasicMaterial({ map: texture.load("/photo3.png") }),
			new THREE.MeshBasicMaterial({ map: texture.load("/photo4.png") }),
			new THREE.MeshBasicMaterial({ map: texture.load("/photo5.png") }),
			new THREE.MeshBasicMaterial({ map: texture.load("/photo8.png") }),
		];
		const pointLight = new THREE.PointLight(0xffffff, 1);
		pointLight.position.z = 10;
		const cube = new THREE.Mesh(geometry, material);

		const controls = new OrbitControls(camera, renderer.domElement);

		scene.add(cube);
		scene.add(pointLight);
		// scene.background=texture

		camera.position.z = 5;
		const animate = () => {
			requestAnimationFrame(animate);
			cube.rotation.y += 0.01;
			// renderer.setSize(window.innerWidth, window.innerHeight);
			// renderer.setSize(800, 533);
			renderer.setSize(900, 600);
			// renderer.setSize(1000, 1000);
			// renderer.setSize(350, 350);
			renderer.render(scene, camera);
		};
		animate();
	}, []);
	return <canvas className="compCanvas"></canvas>;
}

export default Comp;
