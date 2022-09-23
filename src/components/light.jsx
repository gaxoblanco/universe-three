import React from 'react'
import * as THREE from 'three'

export const ambientLight = () => {
  const Alight = new THREE.AmbientLight(0xffffff, 0.5);
}

export const pointLight = ()=>{
    const Plight = new THREE.PointLight(0xffffff, 0.5)
    Plight.position.x = 2;
    Plight.position.y = 3;
    Plight.position.z = 4;
}