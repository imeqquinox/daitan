import * as THREE from 'three';
import { Suspense, useRef } from 'react'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, useGLTF } from '@react-three/drei'; 
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

useGLTF.preload('/david.glb');

type GLTFResult = GLTF & {
  nodes: { 
    Marble_Head_Solid: THREE.Mesh; 
  };
  materials: {
    Marble_Head: THREE.MeshStandardMaterial; 
  };
};

function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('/david.glb') as unknown as GLTFResult;

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime(); 
      group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0);
      group.current.position.y = (Math.sin(t / 2) - 15);
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.Marble_Head_Solid.geometry}
        material={materials.Marble_Head}
        position={[-3.38, -97.42, 5.67]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

function HomeModel() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
      <ambientLight intensity={0.1}/>
      <spotLight position={[5, 5, 5]} angle={Math.PI / 3} penumbra={1} intensity={15} shadow-mapSize={[1024, 1024]} castShadow={true} color="#374785" /> 
      <spotLight position={[30, -15, 0]} angle={Math.PI / 3} penumbra={1} intensity={15} shadow-mapSize={[1024, 1024]} castShadow={true} color="#f76c6c" /> 
      <Suspense fallback={null}>
        <Model scale={0.1} position={[0, -15, -42]} />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, 0, 0]} far={0.4} width={2} height={2} blur={4} />
      </Suspense>
    </Canvas>
  )
}

export default HomeModel