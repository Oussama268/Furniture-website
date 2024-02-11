import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LetherChairModel(props) {
  const { nodes, materials } = useGLTF("./3D_modules/Chair.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.224, 0.807, 0.264]}
        rotation={[0, -0.312, 0]}
        scale={1.143}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009.geometry}
          material={materials["Fabric Beige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_1.geometry}
          material={materials["BlacK Blur"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_2.geometry}
          material={materials.Wood_2k}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./3D_modules/Chair.glb");