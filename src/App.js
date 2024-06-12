import React, { useRef } from 'react'

const App = () => {
  const inputRef=useRef();
  const handleClick=()=>{
    if(inputRef.current.value.length>0){
      console.log(inputRef.current.value);
    }else{
      alert("Please enter some value");
    }
  }
  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
