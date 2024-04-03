import { CSG } from 'three-csg-ts';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { useRef } from 'react';

export default function Arco () {

    const ArcoRef = useRef(null)

    const MaterialRectangulo = new THREE.MeshNormalMaterial()

    const Rectangulo = new THREE.Mesh(

        new THREE.BoxGeometry(5, 13, 4),

        MaterialRectangulo

    );

    Rectangulo.position.x = -2.5

    Rectangulo.position.z = 2

    const AbichuelaForma = new THREE.Shape();

    const x = 0;

    const y = 0;

    const width = 8;

    const height = 4;

    const radius = 2;

    AbichuelaForma.moveTo(x + radius, y);

    AbichuelaForma.lineTo(x + width - radius, y);

    AbichuelaForma.quadraticCurveTo(x + width, y, x + width, y + radius);

    AbichuelaForma.lineTo(x + width, y + height - radius);

    AbichuelaForma.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

    AbichuelaForma.lineTo(x + radius, y + height);

    AbichuelaForma.quadraticCurveTo(x, y + height, x, y + height - radius);

    AbichuelaForma.lineTo(x, y + radius);

    AbichuelaForma.quadraticCurveTo(x, y, x + radius, y);

    const extrudeSettings = {

        depth: 4,

        bevelEnabled: false

    };

    const AbichuelaGeometria = new THREE.ExtrudeGeometry(AbichuelaForma, extrudeSettings);

    const Abichuela = new THREE.Mesh(AbichuelaGeometria, new THREE.MeshNormalMaterial());

    Abichuela.rotation.z += Math.PI / 2

    Abichuela.position.x = -0.5

    Abichuela.position.y = -2

    const Cuadrado = new THREE.Mesh(

        new THREE.BoxGeometry(5, 6, 4),

        new THREE.MeshNormalMaterial()

    );

    Cuadrado.position.z = 2

    Cuadrado.position.x = -2.5

    Cuadrado.position.y = -3.5

    Rectangulo.updateMatrix();

    Abichuela.updateMatrix()

    Cuadrado.updateMatrix()

    const Subresta = CSG.subtract(Rectangulo, Abichuela);

    const Arco = CSG.subtract(Subresta, Cuadrado)

    useFrame(() => {

        if (ArcoRef.current) {

            ArcoRef.current.rotation.y += 0.005

        }

    })

    return <mesh position={[16,0,0]} ref={ArcoRef} args={[Arco.geometry, Arco.material]} />

}