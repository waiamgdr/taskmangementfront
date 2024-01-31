import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const{isAuth}=useSelector(state=>state.user)
  const Navigate=useNavigate()
  useEffect(()=>{
    if (!isAuth) Navigate('/login')

  },[isAuth])
  
  return (
    <div>Profile</div>
  )
}

export default Profile