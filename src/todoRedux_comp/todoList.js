import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import  {delTodo} from "../features/todosSlice"

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos_ar } = useSelector(store => store.todosSlice);

  return (
    <div className='container col-md-6'>
      <h2>List of Todos:</h2>
      <div className="row">
        {todos_ar.map(item => {
          return (
            <div key={item.id} className='col-md-11 my-2 border'>
              <button className='btn btn-danger float-end' onClick={()=> dispatch(delTodo({delId:item.id}))}>X</button>
              <h2>{item.name} - {item.time}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}