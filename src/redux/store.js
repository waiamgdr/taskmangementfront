import Userslice from "./slices/Userslice";
import { configureStore } from "@reduxjs/toolkit";
import taskslice from "./slices/taskslice";
export default configureStore({ reducer:{user:Userslice,task:taskslice}})