import React, { useEffect } from 'react';
import * as THREE from 'three';
import earthImg from './src/textures/earth.jpg';
import earthBumpImg from './src/textures/01_earthbump1k.jpg';

function Earth() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const texture = new THREE.TextureLoader().load(earthImg);
        const bumpTexture = new THREE.TextureLoader().load(earthBumpImg);
        const material = new THREE.MeshPhongMaterial({
            map: texture,
            bumpMap: bumpTexture,
            bumpScale: 0.05,
        });

        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 10, 10).normalize();
        scene.add(light);

        camera.position.z = 15;

        function animate() {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return <></>;
}

export default Earth;