import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//fonction  envoyer req 

export  const createtask=createAsyncThunk("/createtask",async(data,{rejectWithValue,dispatch})=>{
try {
   const res=await axios.post("/createTask",data,{
    headers:{token:localStorage.getItem('token')
}})
dispatch(gettask())
return  res.data
} catch (error) {
   rejectWithValue(error.response.data.msg)
   
}
})


export  const gettask=createAsyncThunk("/gettask",async(data,{rejectWithValue})=>{
    try {
       const res=await axios.get("/getusertaks",{
        headers:{token:localStorage.getItem('token')
    }})
    return  res.data
    } catch (error) {
      return  rejectWithValue(error.response.data.msg)
       
    }
    })

    export  const deletetask=createAsyncThunk("/deletetask",async(id,{rejectWithValue,dispatch})=>{
        try {
           const res=await axios.delete(`/deletetusertak/${id}`,{
            headers:{token:localStorage.getItem('token')
        }})
        dispatch(gettask())
        return  res.data
        } catch (error) {
           return  rejectWithValue(error.response.data.msg)
           
        }
        })
    
    















 const Taskslice=createSlice({

    name:"taskSlice",
    initialState:{
       TaskData:{},
       isLoading:false,
       error:null ,
      
    
    },
    reducers:{
      
    },


    extraReducers:(builder)=>{
        builder.addCase(createtask.fulfilled,(state,action)=>{
           
           state.isLoading=false
           
           
        })
        .addCase(createtask.rejected,(state,action)=>{
          
           state.isLoading=false
        
           state.error=action.payload
        })
        .addCase(createtask.pending,(state,action)=>{
          
           state.isLoading=true
           
        }).addCase(gettask.fulfilled,(state,action)=>{
           
            state.isLoading=false
            state.taskData=action.payload.Tasks
            
         })
         .addCase(gettask.rejected,(state,action)=>{
           
            state.isLoading=false

        
            state.error=action.payload
         })
         .addCase(gettask.pending,(state,action)=>{
           
            state.isLoading=true
            
         })
        
        
      }

   
    
 })
 export default Taskslice.reducer
