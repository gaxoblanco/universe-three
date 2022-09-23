import React, {useEffect} from 'react'
import {Sphere, Tetrahedron, Torus, TorusKnot} from '@react-three/drei'
import * as THREE from 'three'

export const Object = ({state}) => {

    // const randomX = (Math.random() - 0.5) * 10
    // const randomY = (Math.random() - 0.5) * 10
    // const randomZ = (Math.random() - 0.5) * 10
    // const scale = Math.random()

const obj = []

const esfera =[]
for (let i = 0; i < 100; i++){
  const randomX = (Math.random() - 0.5) * 30
  const randomY = (Math.random() - 0.5) * 30
  const randomZ = (Math.random() - 0.5) * 30
  const scale = Math.random()
  esfera.push(<Sphere position={[randomX, randomY, randomZ]} scale={scale}><meshBasicMaterial color='hotpink' /></Sphere>)
}

const toru =[]
for (let i = 0; i < 100; i++){
  const randomX = (Math.random() - 0.5) * 30
  const randomY = (Math.random() - 0.5) * 30
  const randomZ = (Math.random() - 0.5) * 30
  const scale = Math.random()
  toru.push(<Torus position={[randomX, randomY, randomZ]} scale={scale}><meshBasicMaterial color='hotpink' /></Torus>)
}

const tetrahedron =[]
for (let i = 0; i < 100; i++){
  const randomX = (Math.random() - 0.5) * 30
  const randomY = (Math.random() - 0.5) * 30
  const randomZ = (Math.random() - 0.5) * 30
  const scale = Math.random()
  tetrahedron.push(<Tetrahedron position={[randomX, randomY, randomZ]} scale={scale}><meshBasicMaterial color='hotpink' /></Tetrahedron>)
}


  return (
    <mesh>
    {state == 0 ? 
      esfera
      : (state == 1 ? toru
        : tetrahedron)
    }
   </mesh>
  )
}
 