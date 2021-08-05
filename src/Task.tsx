import React, { useState } from "react";

type TaskProps = {
  id: number;
  name: string;
  doneFn: Function;
  deleteFn: Function; //Function type
}

const Task = ({ id, name, doneFn, deleteFn }: TaskProps) => {

  const [display , setDisplay] = useState<{}>({display : 'none'})

  const showButton = () => {
    setDisplay({display : 'block'})
  };

  const hideButton = () => {
    setDisplay({display : 'none'})
  };

  return (
    <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter = {() => showButton()} onMouseLeave = {() => hideButton()}>
      <span className="text-2xl">{name}</span>
      <div style = {display} className ="flex space-x-1 items-center" >
        <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)}>Done</button>
        <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Task
