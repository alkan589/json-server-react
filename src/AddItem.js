import React from 'react'

const AddItem = ({setNewItem,newItem,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        autoFocus
        placeholder='Add Item'
        type="text"
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
    />
    <button >Add Item</button>
    </form>
  )
}

export default AddItem
