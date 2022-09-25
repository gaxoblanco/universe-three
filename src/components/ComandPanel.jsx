import React from 'react'

export const ComandPanel = ({setState, setMat, setTextMat, setText, setPanel}) => {


const handleObj = (n)=>{
    setState(n)
  }

  const handleSetMat = (n)=>{
    setMat(n)
  }
  const handleSetMatText = (n)=>{
    setTextMat(n)
  }

  const onSearchValueChange = (event)=>{
    setText(event.target.value)
}

  return (
    <span className="span-comandPanel-container">
      <div className="options-container">
        <button type='button' className="down-button" onClick={()=>{setPanel(false)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </button>
        <div className='inputs-container'>
          <input 
            type="text" 
            name="name" 
            placeholder='Escribe algo'
            onChange={onSearchValueChange}
          /> 
          <div>
            <button type='button' onClick={()=> handleSetMatText(0)}>1</button>
            <button type='button' onClick={()=> handleSetMatText(1)}>2</button>
            <button type='button' onClick={()=> handleSetMatText(2)}>3</button>
            <button type='button' onClick={()=> handleSetMatText(3)}>4</button>
          </div>
        </div>
        <button type='button' onClick={()=> handleObj(0)}>Conos</button>
        <button type='button' onClick={()=> handleObj(1)}>Octahedron</button>
        <button type='button' onClick={()=> handleObj(2)}>Tetrahedron</button>

        <div className='material-options--container'>
          <button type='button' onClick={()=> handleSetMat(0)}>1</button>
          <button type='button' onClick={()=> handleSetMat(1)}>2</button>
          <button type='button' onClick={()=> handleSetMat(2)}>3</button>
          <button type='button' onClick={()=> handleSetMat(3)}>4</button>
        </div>
      </div>
    </span>
  )
}
