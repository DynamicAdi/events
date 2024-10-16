/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 model.glb 
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import {motion} from "framer-motion-3d"

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  const groupRef = useRef();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 6000);
    setTimeout(() => {
      setAnimate(false);
    }, 16500);
    
  }, [])
  useFrame(() => {
    if (animate === true) {
    groupRef.current.rotation.y += 0.02; // Adjust rotation speed as needed
    if (groupRef.current.rotation.y >= Math.Pi * 2) {
      groupRef.current.rotation.y = 0; // Reset rotation after a full 360°      
    }
    }
  });
  return (
    <group {...props} dispose={null}>
      <group position={[0.859, 0.884, 0.498]} rotation={[-0.041, 0.777, -3.113]} scale={0.045}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.879, -0.627, 0]} scale={0.115}>
            <mesh geometry={nodes.Object_0.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_0_1.geometry} material={materials['Material.009']} />
          </group>
        </group>
      </group>
      
      <pointLight
        intensity={20}
        decay={2}
        position={[5.223, 0.635, -3.44]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        intensity={20}
        decay={2}
        position={[5.223, 0.635, -5.453]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight intensity={10} decay={2} position={[-5.436, 1.771, 0.687]} rotation={[-Math.PI / 2, 0, -0.235]} />
      <pointLight intensity={10} decay={2} position={[-5.385, 1.771, -2.175]} rotation={[-Math.PI / 2, 0, -0.235]} />
      <pointLight intensity={10} decay={2} position={[-5.436, 1.771, -3.987]} rotation={[-Math.PI / 2, 0, -0.235]} />
      <pointLight intensity={10} decay={2} position={[-5.385, 1.771, -6.849]} rotation={[-Math.PI / 2, 0, -0.235]} />
      <pointLight intensity={10} decay={2} position={[-2.092, 1.707, -7.677]} rotation={[-Math.PI / 2, 0, -0.235]} />
      <pointLight intensity={10} decay={2} position={[1.35, 1.707, -7.717]} rotation={[-Math.PI / 2, 0, -0.235]} />
      <pointLight intensity={10} decay={2} position={[2.953, 4.092, 0.3]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[3.108, 4.347, -6.114]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[2.953, 4.092, -2.561]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[4.203, 3.775, 4.558]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[2.953, 1.974, 0.3]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[3.108, 2.229, -6.114]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[2.953, 1.974, -2.561]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[2.953, 1.974, 3.053]} rotation={[-Math.PI / 2, 0, 0]} />
     <motion.group
     initial={{
      scale: 0,
      opacity: 0,
     }}
     animate={{
      scale: 1,
      opacity: 1,
      transition: {delay: 2, duration: 1.5, ease: [0.4, 0, 0.6, 1] },
     }}
     ref={groupRef}>

      <mesh geometry={nodes.Cube001.geometry} material={materials.glow} />
      <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Plane.geometry} material={materials.glow} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials.metal} />
      <mesh geometry={nodes.NurbsPath.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.glow} />
      <mesh geometry={nodes.Cube008.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.NurbsPath001.geometry} material={materials.glow} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cube011.geometry} material={nodes.Cube011.material} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cylinder013.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cube014.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cube015.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials.glow} />
      <mesh geometry={nodes.Cube016.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Text.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Text001.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cube021.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.Cube022.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.thirdChair.geometry} material={materials.wood} />
      <mesh geometry={nodes.thirdChair001.geometry} material={materials['Material.014']} />
      <mesh geometry={nodes.eb_house_plant_02.geometry} material={materials['blinn1SG.001']} />
      <group position={[-0.007, 0.736, -2.666]} rotation={[Math.PI / 2, 0, 0.24]} scale={0}>
        <mesh geometry={nodes.Line342918_1.geometry} material={materials.sfa} />
        <mesh geometry={nodes.Line342918_2.geometry} material={materials['Material #51']} />
        <mesh geometry={nodes.Line342918_3.geometry} material={materials['01 - Defaultg']} />
        <mesh geometry={nodes.Line342918_4.geometry} material={materials['Material #84']} />
        <mesh geometry={nodes.Line342918_5.geometry} material={materials['01 - Defaultd']} />
      </group>
      <group position={[-1.933, 0.763, 0.486]} rotation={[Math.PI / 2, 0, -0.347]} scale={0}>
        <mesh geometry={nodes.Line342918001_1.geometry} material={materials.sfa} />
        <mesh geometry={nodes.Line342918001_2.geometry} material={materials['Material #51']} />
        <mesh geometry={nodes.Line342918001_3.geometry} material={materials['01 - Defaultg']} />
        <mesh geometry={nodes.Line342918001_4.geometry} material={materials['Material #84']} />
        <mesh geometry={nodes.Line342918001_5.geometry} material={materials['01 - Defaultd']} />
      </group>
      <group position={[0, 0.008, 0]}>
        <mesh geometry={nodes.Archmodels70_032_02_1.geometry} material={materials.Archmodels70_032_02} />
        <mesh geometry={nodes.Archmodels70_032_02_2.geometry} material={materials['Material #2097631719']} />
        <mesh geometry={nodes.Archmodels70_032_02_3.geometry} material={materials['Material #2097631714']} />
        <mesh geometry={nodes.Archmodels70_032_02_4.geometry} material={materials.Archmodels70_032_04} />
        <mesh geometry={nodes.Archmodels70_032_02_5.geometry} material={materials.Archmodels70_032_05} />
        <mesh geometry={nodes.Archmodels70_032_02_6.geometry} material={materials['Material #2097631711']} />
        <mesh geometry={nodes.Archmodels70_032_02_7.geometry} material={materials['Material #2097631715']} />
        <mesh geometry={nodes.Archmodels70_032_02_8.geometry} material={materials['Material #2097631716']} />
        <mesh geometry={nodes.Archmodels70_032_02_9.geometry} material={materials['Material #2097631717']} />
        <mesh geometry={nodes.Archmodels70_032_02_10.geometry} material={materials['Material #2097631712']} />
        <mesh geometry={nodes.Archmodels70_032_02_11.geometry} material={materials.Archmodels70_032_11} />
      </group>
      <group position={[0.768, 0.88, 0.177]} rotation={[-Math.PI, 1.565, -Math.PI]} scale={0.667}>
        <mesh geometry={nodes.Cube016_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube016_3.geometry} material={materials.Material} />
      </group>
      <group position={[0.634, 0.886, 0.048]} rotation={[0, 0.652, 0]} scale={0.591}>
        <mesh geometry={nodes.Cube019_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube019_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube019_3.geometry} material={materials['Material.006']} />
      </group>
      <group position={[0.57, 0.89, -0.084]} rotation={[0, 1.471, 0]} scale={0.707}>
        <mesh geometry={nodes.Cube028.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube028_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube028_2.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Cube009_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube009_2.geometry} material={materials.logo} />
      <mesh geometry={nodes.main.geometry} material={materials.darkblue} />
      <mesh geometry={nodes.main_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Wolf3D_Body003.geometry} material={materials['Wolf3D_Body.009']} />
      <mesh geometry={nodes.Wolf3D_Body003_1.geometry} material={materials['Wolf3D_Eye.009']} />
      <mesh geometry={nodes.Wolf3D_Body003_2.geometry} material={materials['Wolf3D_Skin.009']} />
      <mesh geometry={nodes.Wolf3D_Body003_3.geometry} material={materials['Wolf3D_Teeth.009']} />
      <mesh geometry={nodes.Wolf3D_Body003_4.geometry} material={materials.M_Hair_60} />
      <mesh geometry={nodes.Wolf3D_Body003_5.geometry} material={materials['Wolf3D_Outfit_Bottom.009']} />
      <mesh geometry={nodes.Wolf3D_Body003_6.geometry} material={materials['Wolf3D_Outfit_Footwear.009']} />
      <mesh geometry={nodes.Wolf3D_Body003_7.geometry} material={materials['Wolf3D_Outfit_Top.009']} />
    </motion.group>
  </group>
  )
}

useGLTF.preload('/model.glb')
