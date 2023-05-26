import React from 'react'

const Task = ({title,description,deleteTask,index}) => {
  return (
    <div className='task'>
       
     <div>
     <p id="p1">{title}</p>
     <span>{description}</span>
     </div>
     <button className='btn' onClick={()=>deleteTask(index)}>DELETE</button>

    </div>
  )
}

export default Task
