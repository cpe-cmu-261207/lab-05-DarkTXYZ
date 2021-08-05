import { useState } from 'react'
import React from 'react'
import Task from './Task'
import DoneTask from './DoneTask'

type TaskData = {
  id: number;
  name: string;
}

const TodoList = () => {

  const [curTask, setCurTask] = useState<string>('')
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [doneTasks , setDoneTasks] = useState<TaskData[]>([])

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
  }

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key == 'Enter')
      addTask(curTask)
  }

  const addTask = (taskName: string) => {
    //use date.getTime() to get unique numeric id (https://www.w3schools.com/jsref/jsref_gettime.asp)
    const newId = (new Date()).getTime()

    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    // spread syntax [...array] (https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)
    const newTasks = [...tasks, { id: newId, name: taskName }]

    setTasks(newTasks)
  }

  const deleteTask = (id: number) => {
    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  const doneTask = (id:number) => {
    const newDoneTask = tasks.filter(x => x.id == id)
    deleteTask(id)
    const newDoneTasks = [...doneTasks , {id: newDoneTask[0].id , name: newDoneTask[0].name}] 
    setDoneTasks(newDoneTasks)
  }

  return (

    <div className='mx-auto max-w-4xl'>
      <div style={{ backgroundColor: 'yellow' }}>
      <div className = 'flex'>
        <input className='border border-gray-400 w-full text-2xl'
          onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
        <button onClick={() => addTask(curTask)} className='border border-gray-400 w-8 font-bold'>+</button>
      </div>

      <div className="flex flex-col-reverse">
        {tasks.map(x => <Task id={x.id} name={x.name} doneFn={doneTask} deleteFn={deleteTask} />)}
      </div>
      <div className="flex flex-col-reverse bg-blue-300">
        {doneTasks.map(x => <DoneTask id={x.id} name={x.name}/>)}
      </div>

    </div>
    </div>

    
  )
}

export default TodoList