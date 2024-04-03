import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Blob () {

	const mesh = useRef(null)

	useFrame(() => {

		if (mesh.current) {

			mesh.current.rotation.y += 0.003

			mesh.current.rotation.z += 0.003

		}

	});

	return (

		<mesh 
		
		ref={mesh} 
		
		scale={1.5} 
		
		position={[-50,3,0]} 
		
		>
		
		<octahedronGeometry attach="geometry" args={[3 ,0]} />
		
		<meshNormalMaterial attach="material" />
		
		</mesh>

	)

}
