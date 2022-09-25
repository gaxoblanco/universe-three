import { useContext, useRef, useState } from 'react'
import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {PerspectiveCamera, Text3D, OrbitControls, Center} from '@react-three/drei'
import './App.css'


import {Object} from './components/object'
import {ComandPanel} from './components/ComandPanel'

function App() {
  const [state, setState] = useState(0);
  const [mat, setMat] = useState(0);
  const [textMat, setTextMat] = useState(0);
  const [text, setText] = useState('git gaxoblanco');
  const [panel, setPanel] = useState(true);

  const fon = 'fonts/helvetiker_regular.typeface.json';

  const loadingManager = new THREE.LoadingManager()
  const textureLoader = new THREE.TextureLoader(loadingManager)

  const color1 = textureLoader.load('/textures/1.png')
  const color2 = textureLoader.load('/textures/2.png')
  const color3 = textureLoader.load('/textures/3.png')
  const color4 = textureLoader.load('/textures/7.png')

  const color = [ color1, color2, color3, color4]


  return (
    <>
    <div className="App" >
      <Canvas style={{  width: '100%', height: '100vh'}}>
        <PerspectiveCamera 
            makeDefault //para que esta camara sea por default
            position ={[0,10,16]} 
            fov={60}
        />
          <ambientLight />
          <pointLight position={[8,8,8]}/>
          <mesh>
            <Object state={state} mat={mat} color={color}/>
          </mesh>
          
          <Center top center>
            <Text3D rotation={[-0.1,0,0]} font={fon}>
              {text}
              <meshMatcapMaterial matcap={color[textMat]}/>
            </Text3D>
          </Center>
          <OrbitControls  />  
      </Canvas>

      <div className={panel ? "openPanel-container--down" : "openPanel-container"}>
        <button className="openPanel-button" type='button' onClick={(event)=>{setPanel(true)}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
        </button>
      </div> 

      <div className={panel ? 'comandPanel-position' : 'comandPanel-position--down'}>
      
         <ComandPanel 
          setState={setState} 
          setMat={setMat} 
          setTextMat={setTextMat} 
          setText={setText} 
          setPanel={setPanel}
          />
      </div> 
    </div>
    </>
  )
}


export default App
