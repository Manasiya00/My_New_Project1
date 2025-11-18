import React, { useState } from 'react'

function A() {
    const [count,setCount]=useState(0)

    if (count==3){
        throw new Error ("count is invalid")
    }
  return (
    <div>
        <h1 onClick={()=>setCount(count+1)}>count is {count}</h1>
    </div>
  )
}

export default A