import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./computer_and_laptop/scene.gltf"); //change here
  const light = useRef();
  return (
    <mesh>
      <ambientLight intensity={1.5} color={"white"}></ambientLight>
      <spotLight
        ref={light}
        color="white"
        intensity={3}
        distance={100}
        angle={30}
        penumbra={0.2}
        decay={2}
        position={[20, 20, 45]}
      ></spotLight>

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.07 : 0.1}
        position={isMobile ? [0, -1.5, 0] : [2, -2, 1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: [10, 10, 45],
        fov: 10,
        aspect: window.innerWidth / window.innerHeight,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          position={(0, 0, 0)}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
