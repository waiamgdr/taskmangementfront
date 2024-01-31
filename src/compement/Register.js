import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/slices/Userslice';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const{isAuth}=useSelector(state=>state.user)
  const Navigate=useNavigate()
  useEffect(()=>{
    if (isAuth) Navigate('/')

  },[isAuth])
    const {error}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {dispatch(userRegister(data))};
    console.log(errors);
  return (
    <div> <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder=" name" {...register("name", {})} />
    <br/>
    <input type="text" placeholder="email" {...register("email", {})} />
    <br/>
    <input type="password" placeholder="password" {...register("password", {})} />
    <br/>
    <input type="number" placeholder="age" {...register("age", {})} />
    <br/>
    {error && <p style={{color:"red"}}> {error[0].msg}</p> }
    <input type="submit" />
  </form></div>
  )
}

export default Register