import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthMap from './textures/00_earthmap1k.jpg';
import earthBumpMap from './textures/01_earthbump1k.jpg';
import earthSpecularMap from './textures/02_earthspec1k.jpg';
import earthLightsMap from './textures/03_earthlights1k.jpg';
import earthCloudMap from './textures/04_earthcloudmap.jpg';
import earthCloudTransMap from './textures/05_earthcloudmaptrans.jpg';
import starTexture from './textures/stars/circle.png'; 

function Earth() {
    useEffect(() => {
        // Esta wea es pa la camara y armazon de la escena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);

        // para coloriar
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform sampler2D earthMap;
            uniform sampler2D lightsMap;
            uniform vec3 colorAdjustment;
            varying vec2 vUv;
            void main() {
                vec4 color = texture2D(earthMap, vUv);
                vec4 lights = texture2D(lightsMap, vUv);
                color.rgb *= colorAdjustment;
                color.rgb += lights.rgb * 2.0; // Incrementar la intensidad de las luces
                gl_FragColor = color;
            }
        `;

        const uniforms = {
            earthMap: { value: new THREE.TextureLoader().load(earthMap) },
            lightsMap: { value: new THREE.TextureLoader().load(earthLightsMap) },
            colorAdjustment: { value: new THREE.Color(0.8, 0.9, 0.8) } // RGB de las textura
        };

        const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
        const earthMaterial = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            bumpMap: new THREE.TextureLoader().load(earthBumpMap),
            bumpScale: 0.2,
            specularMap: new THREE.TextureLoader().load(earthSpecularMap),
            specular: new THREE.Color('grey'),
            shininess: 30,
        });

        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earth);

        // Nubes
        const cloudGeometry = new THREE.SphereGeometry(5.1, 64, 64);
        const cloudMaterial = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load(earthCloudMap),
            alphaMap: new THREE.TextureLoader().load(earthCloudTransMap),
            transparent: true,
            opacity: 0.7,  
            depthWrite: true
        });

        const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
        scene.add(clouds);

        // Fondo de estrellas con variación de color (blanco y diferentes tonos de amarillo)
        const vertexShaderStars = `
            attribute float size;
            attribute float alpha;
            attribute vec3 customColor;
            varying float vAlpha;
            varying vec3 vColor;
            void main() {
                vAlpha = alpha;
                vColor = customColor;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `;

        const fragmentShaderStars = `
            varying float vAlpha;
            varying vec3 vColor;
            uniform sampler2D pointTexture;
            void main() {
                gl_FragColor = vec4(vColor, vAlpha);
                gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
            }
        `;

        const starsGeometry = new THREE.BufferGeometry();
        const starVertices = [];
        const starSizes = [];
        const starAlphas = [];
        const starColors = [];
        const colors = [new THREE.Color(0xffffff), new THREE.Color(0xffffe0), new THREE.Color(0xfffacd)];

        for (let i = 0; i < 10000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);

            starVertices.push(x, y, z);
            starSizes.push(Math.random() * 5 + 1); // Tamaño de las estrellas
            starAlphas.push(Math.random()); // Transparencia de las estrellas
            starColors.push(colors[Math.floor(Math.random() * colors.length)].toArray()); // Colores aleatorios
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));
        starsGeometry.setAttribute('alpha', new THREE.Float32BufferAttribute(starAlphas, 1));
        starsGeometry.setAttribute('customColor', new THREE.Float32BufferAttribute(starColors.flat(), 3));

        const starsMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexShaderStars,
            fragmentShader: fragmentShaderStars,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
            uniforms: {
                pointTexture: { value: new THREE.TextureLoader().load(starTexture) }
            }
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Cometas
        const cometGeometry = new THREE.CylinderGeometry(0.1, 0.5, 10, 12);
        const cometMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const comets = [];

        for (let i = 0; i < 100; i++) {
            const comet = new THREE.Mesh(cometGeometry, cometMaterial);
            comet.position.set(
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000)
            );
            comet.rotation.z = Math.PI / 2;
            scene.add(comet);
            comets.push(comet);
        }

        // Iluminación
        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 3, 5).normalize();
        scene.add(directionalLight);

        // Controles de órbita
        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 0, 15);
        controls.update();

        // Animación
        const animate = () => {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.001;
            clouds.rotation.y += 0.001;
            controls.update();

            // Actualiza las transparencias de las estrellas para el parpadeo
            const alphas = starsGeometry.attributes.alpha.array;
            for (let i = 0; i < alphas.length; i++) {
                alphas[i] = Math.abs(Math.sin(Date.now() * 0.001 + i));
            }
            starsGeometry.attributes.alpha.needsUpdate = true;

            // Anima los cometas
            comets.forEach(comet => {
                comet.position.z -= 5;
                comet.position.x += Math.random() * 0.1 - 0.05;
                comet.position.y += Math.random() * 0.1 - 0.05;
                if (comet.position.z < -1000) {
                    comet.position.set(
                        THREE.MathUtils.randFloatSpread(2000),
                        THREE.MathUtils.randFloatSpread(2000),
                        1000
                    );
                }
            });

            renderer.render(scene, camera);
        };

        animate();

        // Limpiar
        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null;
}

export default Earth;