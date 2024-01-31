import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{useNavigate}from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createtask, deletetask, gettask } from '../redux/slices/taskslice';
const Home = () => {
  const{isAuth}=useSelector(state=>state.user)
  const Navigate=useNavigate()
  useEffect(()=>{
    if (!isAuth) Navigate('/register')

  },[isAuth])
  useEffect(()=>{
    dispatch(gettask())
  },[])
  
  const title=useRef()
  const description=useRef()
  const {taskData}=useSelector(state=>state.task)
const dispatch=useDispatch()
  return (
    <div>
      <Form  onSubmit={(event)=>{
event.preventDefault()
dispatch(createtask({
  title:title.current.value , 
    description:description.current.value
    
}))


        }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title"  ref={title}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description"  ref={description}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

<div>
{Array.isArray(taskData) && taskData.map((el)=><div> 
  <h3>
    {el.title}
  </h3>
  
  <h6>
    {el.description}
  </h6>
  <button onClick={()=>{dispatch(deletetask(el._id))}}>delete</button>

  <hr/>
</div>)}
</div>
    </div>
  )
}

export default Home