import { useContext, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {PerspectiveCamera, Text3D, OrbitControls, Center} from '@react-three/drei'
import './App.css'

import {AppContext} from './context/AppContex'
import {Object} from './components/object'
import {ComandPanel} from './components/ComandPanel'

function App() {
  const [state, setState] = useState(0);
  const [mat, setMat] = useState(0);
  const [textMat, setTextMat] = useState(0);
  const [text, setText] = useState('hola');
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
            <Object state={state} mat={mat}/>
          </mesh>
          
          <Center top center>
            <Text3D rotation={[-0.1,0,0]} font={fon}>
              {text}
              <meshMatcapMaterial matcap={color[textMat]}/>
            </Text3D>
          </Center>
          <OrbitControls  />  
      </Canvas>

      <div className="comandPanel-position">
        {panel 
        ? <ComandPanel 
          setState={setState} 
          setMat={setMat} 
          setTextMat={setTextMat} 
          setText={setText} />
        : <button>Hola</button>  }
      </div>
    </div>
    </>
  )
}


export default App
