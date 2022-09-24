import { useContext, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {PerspectiveCamera, Text3D, OrbitControls, Center} from '@react-three/drei'
import './App.css'

import {Object} from './components/object'

function App() {
  const [state, setState] = useState(0);
  const [mat, setMat] = useState(0);
  const [text, setText] = useState('hola');

  const fon = 'src/fonts/helvetiker_regular.typeface.json';


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
    setText(event.target.value)
}

  return (
    <div className="App" >
      <Canvas style={{ width: '100%', height: '72vh'}}>
        <PerspectiveCamera 
            makeDefault //para que esta camara sea por default
            position ={[0,10,16]} 
            fov={60}
        />
          <ambientLight />
          <pointLight position={[8,8,8]}/>
          <mesh>
            <Object state={state} mat={mat}/>
          </mesh>
          
          <Center top center>
            <Text3D rotation={[-0.1,0,0]} font={fon}>
              {text}
              <meshNormalMaterial />
            </Text3D>
          </Center>
          <OrbitControls  />  
      </Canvas>
      <div className="options-container">
        <div className='inputs-container'>
          <input 
            type="text" 
            name="name" 
            placeholder='Escribe algo'
            onChange={onSearchValueChange}
          />
          <div>
            <button type='button' onClick={()=> sphere()}>1</button>
            <button type='button' onClick={()=> torus()}>2</button>
            <button type='button' onClick={()=> tetrahedron()}>3</button>
          </div>
        </div>
        <button type='button' onClick={()=> sphere()}>Conos</button>
        <button type='button' onClick={()=> torus()}>Torus</button>
        <button type='button' onClick={()=> tetrahedron()}>Tetrahedron</button>
      </div>
    </div>
  )
}


export default App
