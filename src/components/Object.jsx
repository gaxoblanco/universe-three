import React, {useEffect} from 'react'
import {useLoader} from '@react-three/fiber'
import {Cone, Tetrahedron, Torus, TorusKnot} from '@react-three/drei'
import * as THREE from 'three'


export const Object = ({state, mat}) => {
  const loadingManager = new THREE.LoadingManager()
  const textureLoader = new THREE.TextureLoader(loadingManager)


  const color1 = textureLoader.load('/textures/1.png')
  const color2 = textureLoader.load('/textures/2.png')
  const color3 = textureLoader.load('/textures/3.png')
  const color4 = textureLoader.load('/textures/7.png')

const colorMap = [
  color1, color2, color3, color4
]

// const material = new THREE.MeshBasicMaterial(colorMap[1])

const cones =[]
for (let i = 0; i < 100; i++){
  const randomX = (Math.random() - 0.5) * 30
  const randomY = (Math.random() - 0.5) * 30
  const randomZ = (Math.random() - 0.5) * 30
  const scale = Math.random()
  cones.push(
    <Cone position={[randomX, randomY, randomZ]} scale={[scale, (scale * 3), scale]} rotation={[3,0,0]}>
      <meshMatcapMaterial matcap={colorMap[mat]}/>
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
    <Torus position={[randomX, randomY, randomZ]} rotation= {[rotationX, rotationY, rotationZ]} scale={scale} >
      <meshMatcapMaterial matcap={colorMap[mat]}/>
    </Torus>)
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
      <meshMatcapMaterial matcap={colorMap[mat]} wireframe={true} />
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
 