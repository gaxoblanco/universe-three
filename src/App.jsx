import { useContext, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {PerspectiveCamera, Text3D, OrbitControls} from '@react-three/drei'
import './App.css'

import {Object} from './components/object'

function App() {
  const [state, setState] = useState(0);
  const [text, setText] = useState('');
  let array = [];

  const sphere = ()=>{
    setState(0)
  }
  const torus = ()=>{
    setState(1)
  }
  const tetrahedron = ()=>{
    setState(2)
  }


  const onSearchValueChange = (event)=>{
    console.log('desde el Search',event.target.value);
    setText(event.target.value)
}

  return (
    <div className="App" >
      <Canvas style={{ width: '80vw', height: '80vh'}}>
        <PerspectiveCamera 
            makeDefault //para que esta camara sea por default
            position ={[0,-10,0]} 
            fov={60}
        />
          <ambientLight />
          <pointLight position={[10,10,10]}/>
          <mesh>

          <Object state={state}/>
          </mesh>
          
          
          <Text3D font={'./public/fonts/helvetiker_regular.typeface.json'}>
            {text}
            <meshNormalMaterial />
          </Text3D>
          <OrbitControls  />  
      </Canvas>
      <div className="inputs-container">
        <input 
          type="text" 
          name="name" 
          placeholder='Escribe algo'
          onChange={onSearchValueChange}
        />
        <button type='button' onClick={()=> sphere()}>Esferas</button>
        <button type='button' onClick={()=> torus()}>Torus</button>
        <button type='button' onClick={()=> tetrahedron()}>Tetrahedron</button>
      </div>
    </div>
  )
}


export default App
