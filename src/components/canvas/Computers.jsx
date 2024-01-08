import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desk2/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[0, 30, 20]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.60 : 0.70} position={isMobile ? [0, -2.0, 0] : [0, -1.50, 0]} rotation={[-0.04, 1, -0.05]} />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:600px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => { setIsMobile(event.matches) }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas