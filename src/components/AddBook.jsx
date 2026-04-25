import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddBook = () => {
  const dispatch = useDispatch()
  const [bookItem, setBookItem] = useState({
    id: null,
    title: "",
    author: "",
    isRead: false,
  })
  const book = useSelector((state) => state)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "ADD_BOOK", item: {
      ...bookItem
    }})
    e.target.reset()
    dispatch({type: "MODAL"})
  }
  
  const handleChange = (e) => {
    setBookItem({
      ...bookItem,
      [e.target.name]: e.target.value.trim()
    }) 
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' onChange={handleChange}/>
      <input type="text" name='author' onChange={handleChange}/>
      <button>Add book</button>
    </form>
  )
}

export default AddBook