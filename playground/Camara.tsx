import * as THREE from 'three';

import { useFrame,  } from '@react-three/fiber';

export default function Camara () {

    const Posicion = 0

    const Inicio = new THREE.Vector3(0,2,3)

    const Portafolio = new THREE.Vector3(-50,100,20)

    const SobreMi =  new THREE.Vector3(-30,3,20)

    useFrame((state) => {

        if (Posicion === 0) {

            const Direccion = state.camera.position.lerp(Inicio, .05)

            state.camera.lookAt(Direccion)

        }

        else if (Posicion === 1) {

            const Direccion = state.camera.position.lerp(Portafolio, .01)

            state.camera.lookAt(Direccion)
        }

        else if (Posicion === 2) {

            const Direccion = state.camera.position.lerp(SobreMi, .01)

            state.camera.lookAt(Direccion)
            
        }

    });

    return <> </>

}