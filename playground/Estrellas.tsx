import * as THREE from 'three';

function ObtenerNumeroAleatorio(min: number, max: number): number {

    return Math.round(Math.random() * (max - min) + min);

}

function AgregarEstrellas () {

    const GeometriaEstrella = new THREE.SphereGeometry(0.25, 24, 24)

    const MaterialEstrella = new THREE.MeshStandardMaterial( { color: 0xffffff } )

    const Estrella = new THREE.Mesh(GeometriaEstrella, MaterialEstrella)

    const [x, y, z] = Array(3).fill(0).map(() => ObtenerNumeroAleatorio(-150, 150))

    Estrella.position.set(x, y, z)

    return Estrella as THREE.Mesh

}

const estrellas: THREE.Mesh[] = Array(350).fill(0).map(() => AgregarEstrellas())

function Estrellas () {
    

    return (

        estrellas.map((Estrella, Index) => {

            const { x, y, z } = Estrella.position

            return <mesh key={Index} args={[Estrella.geometry, Estrella.material]} position={[x,y,z]} />

        })

    )

}

export default Estrellas