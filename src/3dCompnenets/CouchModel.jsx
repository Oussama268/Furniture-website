import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CouchModel(props) {
  const { nodes, materials } = useGLTF("./3D_modules/couch.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.big_pillow.geometry}
        material={materials.Leather}
        position={[-1.073, 0.613, -0.371]}
        rotation={[-0.143, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.big_pillow001.geometry}
        material={materials.Leather}
        position={[-0.379, 0.613, -0.371]}
        rotation={[-0.198, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.big_pillow002.geometry}
        material={materials.Leather}
        position={[0.315, 0.613, -0.371]}
        rotation={[-0.143, -0.021, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.big_sit_cousion.geometry}
        material={materials.Leather}
        position={[-0.373, 0.28, -0.053]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom.geometry}
        material={materials.Leather}
        position={[-0.373, 0.219, -0.053]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legs.geometry}
        material={materials.metal}
        position={[0.667, 0.177, 0.33]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.seating_cousion.geometry}
        material={materials.Leather}
        position={[-0.363, 0.339, -0.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.seating_cousion001.geometry}
        material={materials.Leather}
        position={[0.315, 0.339, -0.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.seating_cousion002.geometry}
        material={materials.Leather}
        position={[-1.054, 0.339, -0.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.side_pillow001.geometry}
        material={materials.Leather}
        position={[0.594, 0.555, 0.025]}
        rotation={[1.591, 1.473, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.side_pillow002.geometry}
        material={materials.Leather}
        position={[-1.335, 0.554, 0.025]}
        rotation={[-1.584, 1.421, 1.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sides.geometry}
        material={materials.Leather}
        position={[0.689, 0.418, -0.053]}
      />
    </group>
  );

}

useGLTF.preload("./3D_modules/couch.glb");
