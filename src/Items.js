import React from 'react'
import {FaTrash} from "react-icons/fa"
const Items = ({item,handleCheck,handleDelete}) => {
  return (
       
            <li key={item.id} className='item'>
                <input onChange={()=>handleCheck(item.id)}type="checkbox"checked={item.checked}/>
                <label
                style={
                    (item.checked)?{textDecoration:'line-through'}:null
                } 
                onDoubleClick={()=>handleCheck(item.id)}>{item.title}</label>
                <FaTrash onClick={()=>handleDelete(item.id)} />
            </li>
        )
    
  
}

export default Items
