import React from 'react'
import {Cone, Tetrahedron, Octahedron, } from '@react-three/drei'


export const Object = ({state, mat, color}) => {

const cones =[]
for (let i = 0; i < 100; i++){
  const randomX = (Math.random() - 0.5) * 30
  const randomY = (Math.random() - 0.5) * 30
  const randomZ = (Math.random() - 0.5) * 30
  const scale = Math.random()
  cones.push(
    <Cone position={[randomX, randomY, randomZ]} scale={[scale, (scale * 3), scale]} rotation={[3,0,0]}>
      <meshMatcapMaterial matcap={color[mat]}/>
    </Cone>)
}

const toru =[]
for (let i = 0; i < 100; i++){
  const randomX = (Math.random() - 0.5) * 30
  const randomY = (Math.random() - 0.5) * 30
  const randomZ = (Math.random() - 0.5) * 30
  const rotationX = Math.random() * Math.PI
  const rotationY = Math.random() * Math.PI
  const rotationZ = Math.random() * Math.PI
  const scale = Math.random()
  toru.push(
    <Octahedron position={[randomX, randomY, randomZ]} rotation= {[rotationX, rotationY, rotationZ]} scale={scale} >
      <meshMatcapMaterial matcap={color[mat]}/>
    </Octahedron>)
}

const tetrahedron =[]
for (let i = 0; i < 200; i++){
  const randomX = (Math.random() - 0.5) * 30
  const randomY = (Math.random() - 0.5) * 30
  const randomZ = (Math.random() - 0.5) * 30
  const rotationX = Math.random() * Math.PI
  const rotationY = Math.random() * Math.PI
  const rotationZ = Math.random() * Math.PI
  const scale = Math.random()
  tetrahedron.push(
    <Tetrahedron position={[randomX, randomY, randomZ]} scale={scale} rotation= {[rotationX, rotationY, rotationZ]}>
      <meshMatcapMaterial matcap={color[mat]} wireframe={true} />
    </Tetrahedron>)
}


  return (
    <mesh key={state}>
    {state == 0 ? 
      cones
      : (state == 1 ? toru
        : tetrahedron)
    }
   </mesh>
  )
}
 