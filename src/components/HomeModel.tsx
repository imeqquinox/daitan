import { Suspense, useRef } from 'react'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, useGLTF } from '@react-three/drei'; 
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

function Model(props: any) {
  const { scene } = useGLTF('/david.glb'); 
  return <primitive object={scene} {...props} />
}

function HomeModel() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
      <ambientLight intensity={2}/>
      <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="##121212" />
      <Suspense fallback={null}>
        <Model scale={0.1} position={[0, -15, -40]} />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
      </Suspense>
    </Canvas>
  )
}

export default HomeModel