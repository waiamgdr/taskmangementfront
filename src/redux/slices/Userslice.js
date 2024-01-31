import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//fonction  envoyer req 

export  const userLogin=createAsyncThunk("/login",async(data,{rejectWithValue})=>{
try {
   const res=await axios.post("/login",data)
return  res.data
} catch (error) {
   return rejectWithValue(error.response.data.msg)
   
}
   


})
export  const userRegister=createAsyncThunk("/register",async(data,{rejectWithValue})=>{
   try {
      const res=await axios.post("/register",data)
   return  res.data
   } catch (error) {
      
       return rejectWithValue(error.response.data.msg)
      
   }
      
   
   
   })














 const userslice=createSlice({

    name:"userSlice",
    initialState:{
        userData:{},
        Token:localStorage.getItem('token')||null,
       isLoading:false,
       error:null ,
       isAuth : localStorage.getItem('isAuth')||false
    
    },
    reducers:{
      logout:(state)=>{
         state.Token=null
         state.isAuth=false
         localStorage.removeItem('token')
         localStorage.removeItem('isAuth')
      }
    },
    extraReducers:(builder)=>{
      builder.addCase(userLogin.fulfilled,(state,action)=>{
         state.Token=action.payload.token
         state.isLoading=false
         state.isAuth=true
         localStorage.setItem('token',state.Token)
localStorage.setItem('isAuth',state.isAuth)
      })
      .addCase(userLogin.rejected,(state,action)=>{
         state.Token=false
         state.isLoading=false
         state.isAuth=false
         state.error=action.payload
      })
      .addCase(userLogin.pending,(state,action)=>{
        
         state.isLoading=true
         
      })
      .addCase(userRegister.fulfilled,(state,action)=>{
         state.Token=action.payload.token
         state.isLoading=false
         state.isAuth=true
         localStorage.setItem('token',state.Token)
localStorage.setItem('isAuth',state.isAuth)
      })
      .addCase(userRegister.rejected,(state,action)=>{
         state.Token=false
         state.isLoading=false
         state.isAuth=false
         state.error=action.payload
      })
      .addCase(userRegister.pending,(state,action)=>{
        
         state.isLoading=true
         
      })
    }
 })
 export default userslice.reducer
 export const {logout}=userslice.actions