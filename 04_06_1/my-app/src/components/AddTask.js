import React from 'react'
import { useState } from 'react'

export default function AddTask({onAdd}) {
  const [text, setText] = useState('')   

  const handleSubmit = () => {    
    if(text.trim() !=='')
    {
        onAdd(text.trim())
        setText('')
    }    
  }


  return (
    <div style={{marginTop : '20px'}}>
        <input type='text' onChange={(e) => setText(e.target.value)} value={text} style={{ padding: '10px', width : '50%'}} placeholder ="Enter new Task here" />      
        <button onClick={handleSubmit} style={{ marginLeft : '10px', paddingLeft: '10px', height: '40px', border: '2px solid #ccc', borderRadius : '8px 8px 8px 8px', maxWidth : '50px', background : 'lightblue', color : 'black'}}>Add</button>
    </div>
  )
}
