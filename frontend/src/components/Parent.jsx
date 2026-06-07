import React from 'react'
import Child from './Child'  

const Parent = () => {
  return (
    <div>
        <Child name ="subha" age={18}
        marks ={[90,80,70,94,95]}
        person={{name:"nikhik",dept:["AI$DS","CT"]}}
        />
    </div>
  )
}

export default Parent