import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TableModel(props) {
  const { nodes, materials } = useGLTF("./AGGlead-projects/3D_modules/Table.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Benjara_Viki_47_Inch_Coffee_Table.geometry}
        material={materials["Benjara Viki"]}
        position={[-0.317, -0.001, 0.203]}
        rotation={[-0.056, 1.523, 0.056]}
        scale={1.343}
      />
    </group>
  );
}

useGLTF.preload("./AGGlead-projects/3D_modules/Table.glb");