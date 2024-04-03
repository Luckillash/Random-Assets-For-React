
import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';

import Arco from './Arco';

import Estrellas from './Estrellas';

import Octahedro from './Octahedro';

import Camara from './Camara';

import Scene from "../../public/Scene"

import { Suspense } from 'react';

export default function Playground () {

    return (

        <Canvas

            style={{ position: "absolute" }}

            camera={{

                position: [0, -100, 0]

            }}
        
        >

            <Suspense fallback={null}>

                <Scene />

            </Suspense>

            <color attach="background" args={['#000']} />

            {/* <ambientLight intensity={1} /> */}

            <directionalLight position={[-50, -10, -10]} />

            <Camara />

            {/* <Arco /> */}

            {/* <Octahedro /> */}

            <Estrellas />

            {/* <OrbitControls /> */}

        </Canvas>

    )

}