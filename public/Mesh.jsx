/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 mesh.glb 
*/

import React, { useEffect, useRef, useState } from 'react'
import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import {motion} from "framer-motion-3d"
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/mesh.glb')
  const [rotation, setRotation] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRotation(false)
  //   }, 3000);
  // }, [setRotation, rotation])
  // useFrame(() => {
  //   if (rotation) {
  //     ref.current.rotation.y += 0.015
  //   }
  //   if (!rotation) {
  //     ref.current.rotation.y = 0
  //   }
  // })
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 }, // Container starts hidden
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children with 0.2 seconds delay
        when: 'beforeChildren',
      },
    }, // Container becomes visible
  };

  // Item variants for individual meshes
  const itemVariants = {
    hidden: { scale: 0, opacity: 0 }, // Each mesh starts hidden and scaled down
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1, // Duration of animation for each item
        ease: 'easeInOut',
      },
    }, // Mesh becomes fully visible and scaled up
  };

  return (
    <motion.group {...props} dispose={null}  initial={{
      scale: 0
    }}
    animate={{
      scale: 1,
      transition: { duration: 1.5, delay: 1.2}
    }}>
      <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={28} position={[17.783, 6.429, 16.447]} rotation={[-0.275, 0.829, 0.205]} />
      <pointLight intensity={150} decay={2} position={[-1.237, 6.406, 1.686]} rotation={[-1.26, -0.102, -0.748]} />
      <pointLight intensity={30} decay={2} position={[4.713, 1.365, 6.442]} rotation={[-0.12, 0.836, 0.089]} />
      <pointLight intensity={30} decay={2} position={[-0.032, 1.791, -9.76]} rotation={[-3.03, 0.183, 3.121]} />
      <pointLight intensity={30} decay={2} position={[0.122, 1.353, 0.368]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={30} decay={2} position={[0.738, 1.65, 2.836]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={30} decay={2} position={[0.859, 1.976, -3.588]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={30} decay={2} position={[1.224, 1.513, 6.939]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={5} color={"orange"} decay={2} position={[2.445, 4.889, -4.355]} rotation={[1.518, 1.357, -1.517]} />
      <pointLight intensity={5} color={"orange"} decay={2} position={[2.44, 4.889, -2.243]} rotation={[1.828, 1.327, -1.836]} />
      <pointLight intensity={5} color={"orange"} decay={2} position={[2.432, 4.889, 0.174]} rotation={[1.365, 1.329, -1.359]} />
      <pointLight intensity={5} color={"orange"} decay={2} position={[2.808, 4.828, 2.149]} rotation={[1.802, 1.217, -1.817]} />
      <pointLight intensity={30} decay={2} position={[7.983, 1.252, 0.637]} rotation={[-1.312, 1.508, 1.312]} />
      <pointLight intensity={150} decay={2} position={[-9.093, 3.14, -0.462]} rotation={[-1.737, -1.339, -1.742]} />
      <pointLight intensity={30} decay={2} position={[1.921, -3.508, -0.294]} rotation={[1.754, 0.74, -1.839]} />
      <pointLight intensity={20} decay={2} position={[4.248, 4.711, -1.807]} rotation={[2.992, 0.861, -3.027]} />
     <motion.group
     ref={ref}
     variants={containerVariants}
     initial="hidden"
     animate="visible"
    //  onAnimationStart={() => setRotation(true)}
     onAnimationComplete={() => setRotation(true)}
     >
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube001.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube002.geometry} material={materials.Material} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Plane.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.NurbsPath.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube008.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.NurbsPath001.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder008.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder009.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder010.geometry} material={materials.metal} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube011.geometry} material={materials['01 - Defaultg']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder011.geometry} material={materials.metal} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder012.geometry} material={materials.metal} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder013.geometry} material={materials.metal} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube009.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Plane001.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube015.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder017.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube018.geometry} material={materials['Material.010']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube019.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Plane003.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Plane004.geometry} material={materials['Material.004']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Text.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube021.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube022.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.thirdChair.geometry} material={materials.wood} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.thirdChair001.geometry} material={materials['Material.014']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.eb_house_plant_02.geometry} material={materials['blinn1SG.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube013.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube012.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube025.geometry} material={nodes.Cube025.material} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube016.geometry} material={nodes.Cube016.material} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube017.geometry} material={materials['Material.012']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube027.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.NurbsPath002.geometry} material={materials.Archmodels70_032_11} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder001.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.NurbsPath003.geometry} material={materials.Archmodels70_032_11} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder002.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.NurbsPath004.geometry} material={materials.Archmodels70_032_11} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder003.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.NurbsPath005.geometry} material={materials.Archmodels70_032_11} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cylinder004.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube028.geometry} material={nodes.Cube028.material} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Plane007.geometry} material={materials['5eewe']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Object_0.geometry} material={materials['Material.008']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Object_0_1.geometry} material={materials['Material.009']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube005_1.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube005_2.geometry} material={materials['Material.011']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube006_1.geometry} material={materials.metal} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube006_2.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube006_3.geometry} material={materials['Material.010']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube007_1.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube007_2.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube007_3.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube009_1.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube009_2.geometry} material={materials.logo} />
      <motion.group
       variants={itemVariants}
       >
      <mesh 
      geometry={nodes.Wolf3D_Body003.geometry} material={materials['Wolf3D_Body.009']} />
      <mesh 
      geometry={nodes.Wolf3D_Body003_1.geometry} material={materials['Wolf3D_Eye.009']} />
      <mesh 
      geometry={nodes.Wolf3D_Body003_2.geometry} material={materials['Wolf3D_Skin.009']} />
      <mesh 
      geometry={nodes.Wolf3D_Body003_3.geometry} material={materials['Wolf3D_Teeth.009']} />
      <mesh 
      geometry={nodes.Wolf3D_Body003_4.geometry} material={materials.M_Hair_60} />
      <mesh 
      geometry={nodes.Wolf3D_Body003_5.geometry} material={materials['Wolf3D_Outfit_Bottom.009']} />
      <mesh 
      geometry={nodes.Wolf3D_Body003_6.geometry} material={materials['Wolf3D_Outfit_Footwear.009']} />
      <mesh 
      geometry={nodes.Wolf3D_Body003_7.geometry} material={materials['Wolf3D_Outfit_Top.009']} />
      </motion.group>
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918_1.geometry} material={materials.sfa} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918_2.geometry} material={materials['Material #51']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918_3.geometry} material={materials['01 - Defaultg']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918_4.geometry} material={materials['Material #84']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918_5.geometry} material={materials['01 - Defaultd']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918001_1.geometry} material={materials.sfa} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918001_2.geometry} material={materials['Material #51']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918001_3.geometry} material={materials['01 - Defaultg']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918001_4.geometry} material={materials['Material #84']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Line342918001_5.geometry} material={materials['01 - Defaultd']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_1.geometry} material={materials.Archmodels70_032_02} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_2.geometry} material={materials['Material #2097631719']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_3.geometry} material={materials['Material #2097631714']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_4.geometry} material={materials.Archmodels70_032_04} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_5.geometry} material={materials.Archmodels70_032_05} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_6.geometry} material={materials['Material #2097631711']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_7.geometry} material={materials['Material #2097631715']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_8.geometry} material={materials['Material #2097631716']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_9.geometry} material={materials['Material #2097631717']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_10.geometry} material={materials['Material #2097631712']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Archmodels70_032_02_11.geometry} material={materials.Archmodels70_032_11} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube016_1.geometry} material={materials['Material.005']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube016_2.geometry} material={materials['Material.003']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube016_3.geometry} material={materials['Material.002']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube019_1.geometry} material={materials['Material.005']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube019_2.geometry} material={materials['Material.003']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube019_3.geometry} material={materials['Material.006']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube028_1.geometry} material={materials['Material.007']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube028_2.geometry} material={materials['Material.003']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube028_3.geometry} material={materials['Material.006']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube031.geometry} material={materials['Material.001']} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube031_1.geometry} material={materials.glow} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Cube031_2.geometry} material={materials.darkblue} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Text005.geometry} material={materials.Material} />
      <motion.mesh 
      variants={itemVariants}
      geometry={nodes.Text005_1.geometry} material={materials.darkblue} />
     </motion.group>
    </motion.group>
  )
}

useGLTF.preload('/mesh.glb')
