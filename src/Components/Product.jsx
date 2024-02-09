import * as THREE from  "three" 
import { useThree, Canvas } from '@react-three/fiber'
import {  useState, useEffect, Suspense } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CouchModel } from "../3dCompnenets/CouchModel";
import { Environment } from '@react-three/drei';
import { LetherChairModel } from "../3dCompnenets/LetherChairModel";
import { TableModel } from "../3dCompnenets/TableChairModel";
import { useInView } from "react-intersection-observer";


const CamControls = () => {

  const {camera, gl} = useThree()
  
  useEffect(() => {

    const controls = new OrbitControls(camera, gl.domElement)
    controls.enablePan = false;
    
    return(()=> {
      controls.dispose()
    })

  },[camera,gl])


    return null;
}


export default function Product({REF , INVIEW , product_img , text , model }) {


  const [blend,setBlend] = useState(false)

  



  return (
    <>
    {
     blend ?
    <div className="D3">
     <div className="div-container">
     <Canvas camera={{
      position : [0, 1.2, 1.5],
  
     }}>
      <CamControls />

      
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        
      </Suspense>


      {
        model=="couch" &&  <CouchModel position={[0.4,0,0]} />

      }

      {
        model == "chair" && <LetherChairModel />
      }

      {
        model == "table" &&  <TableModel position={[0.2,0,0]} />
      }
       
     </Canvas>

     </div>
     <button type="onclick" onClick={() => setBlend(!blend)}> Image </button>
     </div>
     
     :

     <div id="PRODUCTS">

     <img className={`${INVIEW ? "animate" : ''}`} ref={REF} width={"300px"} src={product_img} alt="" />
     <h4 className={`${INVIEW ? "animate" : ''}`} ref={REF}>{text}</h4>

     <button type="onclick" onClick={() => setBlend(!blend)}> See in 3D </button>
     
     </div>

    }
    
    
  </>
  )
}

// <button type="onclick" onClick={() => setBlend(!blend)}>{blend ? <>3D</> : <>2D</>}</button>

