import React from 'react';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react'
import apiReq  from './api';
function TodoList() {

  const API_URL="http://localhost:3001/items"
  const [items,setItems]=useState([]); 
  const [newItem,setNewItem]=useState("") 
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoading]=useState(true)
  
useEffect(()=>{
  const fetchItems=async()=>{
    try{
      setIsLoading(true);
      const response=await fetch(API_URL);
      const ItemList=await response.json()
      if(!response.ok) throw Error("not found")
      setItems(ItemList)
      setFetchError(null);
    }
    catch(err){
      setFetchError(err.message)
    }
    finally{
      setIsLoading(false)
    }
  }
  setTimeout(()=>{
    (async ()=> await fetchItems())()
  },2000)
},[])


const addItem= async (name)=>{
  const id=Math.floor(Math.random()*1000000000)
  const myItems={id,checked:false,title:name}
  setItems([...items,myItems])

  const post={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:await JSON.stringify(myItems)
  }
  const result=apiReq(API_URL,post);
  if(!result) setFetchError(result);
}
const handleSubmit=(e)=>{
  e.preventDefault();
  if(!newItem) return ;
  addItem(newItem)
  console.log("submitted");
  setNewItem("")
}
const handleCheck= async (id)=>{
    const listItems=items.map(item=>item.id===id ? {...item , checked: !item.checked}:item)
    console.log(id)
    const myItem=listItems.map(item=>item.id===id)
    setItems(listItems);
    const patch={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:await JSON.stringify({ checked: myItem[0].checked})
    }
    const requestUrl= `${API_URL}/${id}`
    const result=apiReq(requestUrl,patch)
    if(result) setFetchError(result)
} 
const handleDelete= async(id)=>{
    const filteredItems=items.filter((item)=>item.id!==id)
    setItems(filteredItems)

    const deleteOption={
      method:"DELETE"
    }
    const requestUrl= `${API_URL}/${id}`
    const result=apiReq(requestUrl,deleteOption)
    if(result)setFetchError(result)
}

  return (
    <div>
      <Header title="GroceryList" />
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem}/>
      <main>
      {isLoading && <p>Data is loading</p>}
      {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
      <Content handleCheck={handleCheck} handleDelete={handleDelete} items={items}/>
      </main>
      <Footer/>
    </div>
  );
}

export default TodoList;
