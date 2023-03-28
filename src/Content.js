import React from 'react'
import Items from './Items'

const Content = ({handleCheck,handleDelete,items}) => {

  return (
    <>
        {items.map((item)=>{
            return(
                <Items
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            )
        })}


    </>
  )
}

export default Content
